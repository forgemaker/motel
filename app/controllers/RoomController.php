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

        if (empty($room->toArray())) {
            return Response::json(array('error_text' => '目前無任何空房'), 401);
        }

        return Response::json(array('success_text' => 'ok', 'item' => $room->toArray()[0]));
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

        $data = array(
            'total_pages' => $total_pages,
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
        $prefix = ($type == 0) ? 'rest' : 'stay';
        $change = false;
        $price_1 = Input::get('price_1', 0);
        $price_2 = Input::get('price_2', 0);
        $price_3 = Input::get('price_3', 0);
        $diff_price_2 = $price_1 - $price_2;
        $diff_price_3 = $price_1 - $price_3;

        if ($price_2 > 0 and ($price_2 < $motel->{$prefix . '_price_1'} or $motel->{$prefix . '_price_1'} == 0)) {
            $motel->{$prefix . '_price_1'} = $price_2;
            $change = true;
        }

        if ($price_3 > 0 and ($price_3 < $motel->{$prefix . '_price_2'} or $motel->{$prefix . '_price_2'} == 0)) {
            $motel->{$prefix . '_price_2'} = $price_3;
            $change = true;
        }

        if ($diff_price_2 > 0 and ($diff_price_2 > $motel->{$prefix . '_diff_price_1'} or $motel->{$prefix . '_diff_price_1'} == 0)) {
            $motel->{$prefix . '_diff_price_1'} = $diff_price_2;
            $change = true;
        }

        if ($diff_price_3 > 0 and ($diff_price_3 > $motel->{$prefix . '_diff_price_2'} or $motel->{$prefix . '_diff_price_2'} == 0)) {
            $motel->{$prefix . '_diff_price_2'} = $diff_price_3;
            $change = true;
        }

        if ($change) {
            $motel->save();
        }
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
