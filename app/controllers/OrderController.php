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
        // 1: 進房完成
        // 2: 取消訂單
        $default_action = array('1', '2');

        $id = Input::get('id');
        $uid = Input::get('uid', null);
        $serial_number = Input::get('serial_number', null);
        $status_id = Input::get('status_id');
        $order = Order::find($id);

        if (!isset($order)) {
            return Response::json(array('error_text' => '訂單不存在'), 404);
        }

        if ($order->status_id != 0) {
            return Response::json(array('error_text' => '此訂單以完成或取消'), 200);
        }

        if (!in_array($status_id, $default_action)) {
            return Response::json(array('error_text' => '訂單狀態錯誤'), 401);
        }

        // login user
        if (!in_array('Admin', Session::get('user_groups')) and Auth::check()) {
            if ($order->motel_id != Session::get('motel_id')) {
                return Response::json(array('error_text' => '您並非管理者'), 401);
            }
        }

        // Anonymous user
        if (!Auth::check()) {
            if ($status_id != '2') {
                return Response::json(array('error_text' => '你尚未有此權限'), 401);
            }

            if ($uid != $order->uid or $serial_number != $order->serial_number) {
                return Response::json(array('error_text' => '您並非此訂單客戶'), 401);
            }
        }

        $order->date_finished = date('Y-m-d H:i:s');
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
    public function sublist($id = null)
    {
        $offset = Input::get('offset', $this->offset);
        $limit = Input::get('limit', $this->limit);
        $field = Input::get('field', 'add_time');
        $sort = Input::get('sort', 'desc');
        $page = Input::get('page', 1);
        $uid = Input::get('uid', null);
        $status_id = Input::get('status_id', null);

        // get total count
        $total_counts = Order::OfMotel($id)
            ->OfUid($uid)
            ->OfStatus($status_id)
            ->count();
        $total_pages = ceil($total_counts/$limit);

        if ($page > 1) {
            $offset = ($page - 1) * $limit;
        }

        $items = Order::select(DB::raw('orders.*, motels.title as motel_title'))
            ->OfMotel($id)
            ->leftJoin('motels', 'orders.motel_id', '=', 'motels.id')
            ->OfUid($uid)
            ->OfStatus($status_id)
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

        if (!isset($motel)) {
            return Response::json(array('error_text' => '摩鐵不存在'), 404);
        }

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
     *
     * Generate an activation code
     *
     * @param int
     * @param string
     * @return string
     */
    public function generate_code($length = 11, $type = 'auto')
    {
        $code = "";
        switch ($type) {
            case 'digit':
                $chars = '1234567890';
            break;
            case 'word':
                $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
            default:
                $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            break;
        }

        srand((double) microtime()*1000000);
        for ($i=0; $i<$length; $i++) {
            $code .= substr ($chars, rand() % strlen($chars), 1);
        }

        return $code;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $motel_id = intval(Input::get('motel_id'));
        $room_id = intval(Input::get('room_id'));
        $is_weekend = intval(Input::get('is_weekend', 0));
        $total_price = intval(Input::get('total_price', 0));
        $user_name = Input::get('user_name', null);
        $user_phone = Input::get('user_phone', null);
        $uid = Input::get('uid', null);
        $coupon = intval(Input::get('coupon', 0));
        $motel = Motel::find($motel_id);
        $room = Room::find($room_id);

        if (!isset($uid)) {
            return Response::json(array('error_text' => '手機號碼不存在'), 404);
        }

        if (!isset($motel)) {
            return Response::json(array('error_text' => '摩鐵不存在'), 404);
        }

        if (!isset($room)) {
            return Response::json(array('error_text' => '房型不存在'), 404);
        }

        if ($total_price <= 0) {
            return Response::json(array('error_text' => '你尚未輸入價格'), 401);
        }

        if (empty($user_name) or empty($user_phone)) {
            return Response::json(array('error_text' => '姓名，電話必須填寫'), 401);
        }

        if ($motel_id != $room->motel_id) {
            return Response::json(array('error_text' => '房型不在摩鐵清單內'), 401);
        }

        if ($room->active == '0') {
            return Response::json(array('error_text' => '房型關閉中'), 401);
        }

        // check uid exist
        $phone = Phone::ofUid($uid)->get();
        $user_coupon = 0;
        if (empty($phone->toArray())) {
            Phone::create(array(
                'uid' => $uid,
                'coupon' => 0,
                'add_time' => time(),
                'edit_time' => time()
            ));
        } else {
            $user_coupon = $phone->toArray()[0]['coupon'];
        }

        // update user coupon
        if ($coupon > $user_coupon) {
            return Response::json(array('error_text' => '您的 coupon 點數不足'), 401);
        } elseif ($coupon != 0) {
            $phone = Phone::find($phone->toArray()[0]['id']);
            $phone->coupon = $phone->coupon - $coupon;
            $phone->edit_time = time();
            $phone->save();
        }

        $now = date('Y-m-d H:i:s');
        if ($room->type == '0') {
            $enter_time = date('Y-m-d H:i:s', strtotime("+1 hour"));
        } else {
            if ($is_weekend == 0) {
                $enter_time = date('Y-m-d') . ' ' . $motel->stay_time_1;
            } else {
                $enter_time = date('Y-m-d') . ' ' . $motel->stay_time_2;
            }
        }

        $serial_number = strtoupper($this->generate_code('6'));
        $order = Order::create(array(
            'motel_id' => $motel_id,
            'room_id' => $room_id,
            'is_weekend' => $is_weekend,
            'uid' => Input::get('uid'),
            'user_name' => $user_name,
            'user_phone' => $user_phone,
            'room_title' => $room->title,
            'room_type' => $room->type,
            'serial_number' => $serial_number,
            'total_price' => $total_price,
            'enter_time' => $enter_time,
            'coupon' => $coupon,
            'motel_data' => json_encode($motel->toArray()),
            'room_data' => json_encode($room->toArray()),
            'date_purchased' => Input::get('date_purchased', $now),
            'date_finished' => Input::get('date_finished', null),
            'status_id' => (Auth::check()) ? intval(Input::get('status_id', 0)) : 0,
            'add_time' => time(),
            'edit_time' => time()
        ));

        $data = array(
            'success_text' => 'ok',
            'serial_number' => $serial_number,
            'id' => $order->id
        );

        return Response::json($data);

    }

    /**
     * Display the specified resource.
     *
     * @param  int      $id
     * @return Response
     */
    public function show($id)
    {
        $item = Order::find($id);

        if (!isset($item)) {
            return Response::json(array('error_text' => '訂單不存在'), 404);
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
        $item = Order::find($id);

        if (!isset($item)) {
            return Response::json(array('error_text' => '訂單不存在'), 404);
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
        $order = Order::find($id);

        if (!isset($order)) {
            return Response::json(array('error_text' => '訂單不存在'), 404);
        }

        $uid = Input::get('uid', null);
        $rank = intval(Input::get('rank', 1));
        $title = Input::get('title', null);
        $description = Input::get('description', null);

        // update from mobile phone
        if (!Auth::check()) {
            if ($order->rank >= 1 and $order->rank <=5) {
                return Response::json(array('error_text' => '您已經評價過了'), 401);
            }

            if ($order->status_id == "0" or $order->status_id == "2") {
                return Response::json(array('error_text' => '此訂單尚未完成或被取消'), 401);
            }

            if ($order->uid != Input::get('uid', null)) {
                return Response::json(array('error_text' => '你沒有存取操作權限'), 401);
            }

            if ($rank < 1 or $rank > 5) {
                return Response::json(array('error_text' => '評分請介於 1~5'), 401);
            }

            // check uid exist then update coupon
            $phone = Phone::ofUid($uid)->get();
            if (empty($phone->toArray())) {
                Phone::create(array(
                    'uid' => $uid,
                    'coupon' => 1,
                    'add_time' => time(),
                    'edit_time' => time()
                ));
            } else {
                $phone = Phone::find($phone->toArray()[0]['id']);
                $phone->coupon = $phone->coupon + 1;
                $phone->edit_time = time();
                $phone->save();
            }

            $order->rank = $rank;
            $order->title = $title;
            $order->description = $description;

            $order->edit_time = time();
            $order->save();
            $this->update_rank($order->motel_id);
            return Response::json(array('success_text' => 'ok'));
        }

        $order->uid = $uid;
        $order->user_name = Input::get('user_name', null);
        $order->user_phone = Input::get('user_phone', null);
        $order->room_title = Input::get('room_title');
        $order->room_type = Input::get('room_type');
        $order->total_price = Input::get('total_price');
        $order->date_purchased = Input::get('date_purchased');
        $order->date_finished = Input::get('date_finished');
        $order->status_id = Input::get('status_id', 0);
        $order->rank = $rank;
        $order->title = $title;
        $order->description = $description;

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
