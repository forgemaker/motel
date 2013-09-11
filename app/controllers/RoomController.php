<?php

class RoomController extends \BaseController
{
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
    public function sublist($id)
    {
        $rooms = Room::where('motel_id', $id)->get()->toArray();

        $data = array(
            'items' => $rooms
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

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $room = Room::create(array(
            'motel_id' => Input::get('motel_id'),
            'title' => Input::get('title'),
            'rest_price_1' => Input::get('rest_price_1', 0),
            'rest_price_2' => Input::get('rest_price_2', 0),
            'rest_price_3' => Input::get('rest_price_3', 0),
            'stay_price_1' => Input::get('stay_price_1', 0),
            'stay_price_2' => Input::get('stay_price_2', 0),
            'stay_price_3' => Input::get('stay_price_3', 0),
            'raw_name' => Input::get('raw_name'),
            'image_url' => Input::get('image_url'),
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

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int      $id
     * @return Response
     */
    public function edit($id)
    {
        $room = Room::find($id)->toArray();
        $data = array(
            'item' => $room
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
        $room = Room::find($id);

        $room->title = Input::get('title');
        $room->rest_price_1 = Input::get('rest_price_1', 0);
        $room->rest_price_2 = Input::get('rest_price_2', 0);
        $room->rest_price_3 = Input::get('rest_price_3', 0);
        $room->stay_price_1 = Input::get('stay_price_1', 0);
        $room->stay_price_2 = Input::get('stay_price_2', 0);
        $room->stay_price_3 = Input::get('stay_price_3', 0);
        $room->raw_name = Input::get('raw_name');
        $room->image_url = Input::get('image_url');
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
