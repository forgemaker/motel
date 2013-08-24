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
            'rest_1_price' => Input::get('rest_1_price'),
            'rest_2_price' => Input::get('rest_2_price'),
            'rest_3_price' => Input::get('rest_3_price'),
            'stay_1_price' => Input::get('stay_1_price'),
            'stay_2_price' => Input::get('stay_2_price'),
            'stay_3_price' => Input::get('stay_3_price'),
            'raw_name' => Input::get('raw_name'),
            'image_url' => Input::get('image_url'),
            'add_time' => Input::get('add_time'),
            'edit_time' => Input::get('edit_time'),
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
        $room->rest_1_price = Input::get('rest_1_price');
        $room->rest_2_price = Input::get('rest_2_price');
        $room->rest_3_price = Input::get('rest_3_price');
        $room->stay_1_price = Input::get('stay_1_price');
        $room->stay_2_price = Input::get('stay_2_price');
        $room->stay_3_price = Input::get('stay_3_price');
        $room->raw_name = Input::get('raw_name');
        $room->image_url = Input::get('image_url');
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
