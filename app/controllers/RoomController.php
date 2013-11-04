<?php

class RoomController extends \BaseController
{
    public $limit = 10;
    public $offset = 0;

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $rooms = Room::all()->toArray();

        $data = array(
            'items' => $rooms
        );
        return Response::json($data);
    }

    /**
     * Enable or disable all room.
     *
     * @return Response
     */
    public function enable()
    {
        $motel_id = Input::get('motel_id');
        $active = Input::get('active');
        $id = Input::get('id', null);

        $motel = Motel::find($motel_id);

        if (!isset($motel)) {
            return Response::json(array('error_text' => '摩鐵不存在'), 404);
        }

        if ($motel_id != Session::get('motel_id')) {
            return Response::json(array('error_text' => '您並非管理者'), 401);
        }

        if (isset($id)) {
            $affectedRows = Room::where('id', $id)->update(array('active' => $active));
        } else {
            $affectedRows = Room::where('motel_id', $motel_id)->update(array('active' => $active));
        }

        $data = array(
            'success_text' => 'ok',
            'affectedRows' => $affectedRows
        );
        return Response::json($data);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function quick($id = null)
    {
        $type = Input::get('type', 0);

        $motel = Motel::find($id);

        if (!isset($motel)) {
            return Response::json(array('error_text' => '摩鐵不存在'), 404);
        }

        if ($type == 0) {
            $field = 'price_2';
        } else {
            $field = 'price_3';
        }

        $room = Room::OfMotel($id)
            ->OfActive(1)
            ->ofOrderBy($field, 'asc')
            ->ofLimit(1)
            ->get();

        $item = $room->toArray();
        if (empty($item)) {
            return Response::json(array('error_text' => '目前無任何空房'), 401);
        }

        return Response::json(array('success_text' => 'ok', 'item' => $item[0]));
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function sublist($id = null)
    {
        $type = Input::get('type', null);
        $active = Input::get('active', null);
        $offset = Input::get('offset', $this->offset);
        $limit = Input::get('limit', $this->limit);
        $field = Input::get('field', 'add_time');
        $sort = Input::get('sort', 'desc');
        $page = Input::get('page', 1);

        // get total count
        $total_counts = Room::OfMotel($id)->count();
        $total_pages = ceil($total_counts/$limit);

        if ($page > 1) {
            $offset = ($page - 1) * $limit;
        }

        $items = Room::select(DB::raw('rooms.*, motels.title as motel_title, motels.rest_time_1, motels.rest_time_2'))
            ->leftJoin('motels', 'rooms.motel_id', '=', 'motels.id')
            ->OfActive($active)
            ->ofType($type)
            ->OfMotel($id)
            ->ofLimit($limit)
            ->ofOffset($offset)
            ->ofOrderBy($field, $sort)
            ->get();

        $is_weekend = 0;
        if (isset($id)) {
            $motel = Motel::find($id);
            if (isset($motel)) {
                $is_weekend = $motel->is_weekend;
            }
        }

        $data = array(
            'total_pages' => $total_pages,
            'motel_id' => $id,
            'is_weekend' => $is_weekend,
            'items' => $items->toArray()
        );
        return Response::json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    public function  update_room_price($motel, $type = 0)
    {
        $rest = DB::select('select min(`price_2`) as rest_price_1, min(`price_3`) as rest_price_2, max(`price_1` - `price_2`) as rest_diff_price_1, max(`price_1` - `price_3`) as rest_diff_price_2 from rooms where motel_id = ? and type = 0', array($motel->id));
        $stay = DB::select('select min(`price_2`) as stay_price_1, min(`price_3`) as stay_price_2, max(`price_1` - `price_2`) as stay_diff_price_1, max(`price_1` - `price_3`) as stay_diff_price_2 from rooms where motel_id = ? and type = 1', array($motel->id));
        $motel->rest_price_1 = $rest[0]->rest_price_1;
        $motel->rest_price_2 = $rest[0]->rest_price_2;
        $motel->rest_diff_price_1 = $rest[0]->rest_diff_price_1;
        $motel->rest_diff_price_2 = $rest[0]->rest_diff_price_2;
        $motel->stay_price_1 = $stay[0]->stay_price_1;
        $motel->stay_price_2 = $stay[0]->stay_price_2;
        $motel->stay_diff_price_1 = $stay[0]->stay_diff_price_1;
        $motel->stay_diff_price_2 = $stay[0]->stay_diff_price_2;
        $motel->save();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $motel_id = Input::get('motel_id', 0);
        $motel = Motel::find($motel_id);

        if (!isset($motel)) {
            return Response::json(array('error_text' => '摩鐵不存在'), 404);
        }

        $this->update_room_price($motel, Input::get('type', 0));
        $room = Room::create(array(
            'motel_id' => Input::get('motel_id'),
            'title' => Input::get('title'),
            'type' => Input::get('type', 0),
            'price_1' => Input::get('price_1', 0),
            'price_2' => Input::get('price_2', 0),
            'price_3' => Input::get('price_3', 0),
            'raw_name' => json_encode(Input::get('raw_name')),
            'active' => Input::get('active', 1),
            'add_time' => time(),
            'edit_time' => time()
        ));

        return Response::json(array('success_text' => 'ok'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int      $id
     * @return Response
     */
    public function show($id)
    {
        $item = Room::with('motel')->find($id);

        if (!isset($item)) {
            return Response::json(array('error_text' => '房型不存在'), 404);
        }

        $data = array(
            'item' => $item->toArray()
        );
        return Response::json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int      $id
     * @return Response
     */
    public function edit($id)
    {
        $item = Room::with('motel')->find($id);

        if (!isset($item)) {
            return Response::json(array('error_text' => '房型不存在'), 404);
        }

        $data = array(
            'item' => $item->toArray()
        );
        return Response::json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int      $id
     * @return Response
     */
    public function update($id)
    {
        $motel_id = Input::get('motel_id', 0);
        $motel = Motel::find($motel_id);

        if (!isset($motel)) {
            return Response::json(array('error_text' => '摩鐵不存在'), 404);
        }
        $this->update_room_price($motel, Input::get('type', 0));

        $room = Room::find($id);

        $room->title = Input::get('title');
        $room->type = Input::get('type', 0);
        $room->price_1 = Input::get('price_1', 0);
        $room->price_2 = Input::get('price_2', 0);
        $room->price_3 = Input::get('price_3', 0);
        $room->raw_name = json_encode(Input::get('raw_name'));
        $room->active = Input::get('active', 1);
        $room->edit_time = time();

        $room->save();
        return Response::json(array('success_text' => 'ok'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int      $id
     * @return Response
     */
    public function destroy($id)
    {
        $id = (Input::has('id') and is_array(Input::get('id'))) ? Input::get('id') : intval($id);

        Room::destroy($id);
        return Response::json(array('success_text' => 'ok'));
    }

}
