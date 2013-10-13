<?php

class OrderController extends \BaseController
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
    public function action()
    {
        $id = Input::get('id');
        $status_id = Input::get('status_id');
        $order = Order::find($id);

        $order->status_id = $status_id;
        $order->save();

        $data = array(
            'success_text' => 'ok'
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
        $offset = Input::get('offset', $this->offset);
        $limit = Input::get('limit', $this->limit);
        $field = Input::get('field', 'add_time');
        $sort = Input::get('sort', 'desc');
        $page = Input::get('page', 1);

        // get total count
        $total_counts = Order::OfMotel($id)->count();
        $total_pages = ceil($total_counts/$limit);

        if ($page > 1) {
            $offset = ($page - 1) * $limit;
        }

        $items = Order::OfMotel($id)
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

    public function update_rank($motel_id = 0)
    {
        if (empty($motel_id)) {
            return false;
        }

        $motel = Motel::find($motel_id);

        $item = DB::table('orders')
            ->select(DB::raw('count(*) as count, SUM(rank) as sum'))
            ->where('motel_id', '=', $motel_id)
            ->whereNotNull('rank')
            ->groupBy('motel_id')
            ->first();

        $motel->rank = $item->sum / $item->count;
        $motel->save();
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
            'uid' => Input::get('uid'),
            'user_name' => Input::get('user_name', null),
            'user_phone' => Input::get('user_phone', null),
            'room_title' => Input::get('room_title', null),
            'room_type' => Input::get('room_type', null),
            'serial_number' => Input::get('serial_number', null),
            'total_price' => Input::get('total_price', null),
            'date_purchased' => Input::get('date_purchased', date('Y-m-d H:i:s')),
            'date_finished' => Input::get('date_finished', null),
            'status_id' => Input::get('status_id', 0),
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
        $item = Order::find($id)->toArray();

        if (!isset($item)) {
            return Response::json(array('error_text' => '404 not found'), 404);
        }

        $data = array(
            'item' => $item
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
        $item = Order::find($id)->toArray();

        if (!isset($item)) {
            return Response::json(array('error_text' => '404 not found'), 404);
        }

        $data = array(
            'item' => $item
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

        $order->uid = Input::get('uid');
        $order->user_name = Input::get('user_name');
        $order->user_phone = Input::get('user_phone');
        $order->room_title = Input::get('room_title');
        $order->room_type = Input::get('room_type');
        $order->serial_number = Input::get('serial_number');
        $order->total_price = Input::get('total_price');
        $order->date_purchased = Input::get('date_purchased');
        $order->date_finished = Input::get('date_finished');
        $order->status_id = Input::get('status_id');
        $order->rank = Input::get('rank', 1);
        $order->title = Input::get('title', null);
        $order->description = Input::get('description', null);

        $order->edit_time = time();
        $order->save();

        $this->update_rank($order->motel_id);
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
