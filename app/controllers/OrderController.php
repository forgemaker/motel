<?php

class OrderController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $orders = Order::all()->toArray();

        $data = array(
            'items' => $orders
        );
        return Response::json($data);
    }

    /**
     * Enable or disable all order.
     *
     * @return Response
     */
    public function enable()
    {
        $motel_id = Input::get('motel_id');
        $active = Input::get('active');

        $affectedRows = Order::where('motel_id', $motel_id)->update(array('active' => $active));

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
        $orders = Order::where('motel_id', $id)->get()->toArray();

        $data = array(
            'items' => $orders
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
        $order = Order::create(array(
            'motel_id' => Input::get('motel_id'),
            'title' => Input::get('title'),
            'type' => Input::get('type', 0),
            'price_1' => Input::get('price_1', 0),
            'price_2' => Input::get('price_2', 0),
            'price_3' => Input::get('price_3', 0),
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
        $order = Order::find($id)->toArray();
        $data = array(
            'item' => $order
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
        $order = Order::find($id);

        $order->title = Input::get('title');
        $order->type = Input::get('type', 0);
        $order->price_1 = Input::get('price_1', 0);
        $order->price_2 = Input::get('price_2', 0);
        $order->price_3 = Input::get('price_3', 0);
        $order->raw_name = Input::get('raw_name');
        $order->image_url = Input::get('image_url');
        $order->active = Input::get('active', 1);
        $order->edit_time = time();

        $order->save();
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

        Order::destroy($id);
        return Response::json(array('success_text' => 'ok'));
    }

}
