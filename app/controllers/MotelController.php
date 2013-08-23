<?php

class MotelController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $motels = Motel::all()->toArray();

        $data = array(
            'items' => $motels
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
        $motel = Motel::create(array(
            'title' => Input::get('title'),
            'url' => Input::get('url'),
            'county' => Input::get('county'),
            'district' => Input::get('district'),
            'zipcode' => Input::get('zipcode'),
            'address' => Input::get('address'),
            'phone_1' => Input::get('phone_1'),
            'phone_2' => Input::get('phone_2'),
            'fax' => Input::get('fax'),
            'contact' => Input::get('contact'),
            'mobile_1' => Input::get('mobile_1'),
            'mobile_2' => Input::get('mobile_2'),
            'commission' => Input::get('commission'),
            'contract_start' => Input::get('contract_start'),
            'contract_end' => Input::get('contract_end'),
            'rest_time_1' => Input::get('rest_time_1'),
            'rest_time_2' => Input::get('rest_time_2'),
            'stay_time_1' => Input::get('stay_time_1'),
            'stay_time_2' => Input::get('stay_time_2'),
            'introduction' => Input::get('introduction'),
            'equipment' => Input::get('equipment'),
            'feature' => Input::get('feature'),
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int      $id
     * @return Response
     */
    public function edit($id)
    {
        $motel = Motel::find($id)->toArray();
        $data = array(
            'item' => $motel
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
        $motel = Motel::find($id);

        $motel->title = Input::get('title');
        $motel->url = Input::get('url');
        $motel->county = Input::get('county');
        $motel->district = Input::get('district');
        $motel->zipcode = Input::get('zipcode');
        $motel->address = Input::get('address');
        $motel->phone_1 = Input::get('phone_1');
        $motel->phone_2 = Input::get('phone_2');
        $motel->fax = Input::get('fax');
        $motel->contact = Input::get('contact');
        $motel->mobile_1 = Input::get('mobile_1');
        $motel->mobile_2 = Input::get('mobile_2');
        $motel->commission = Input::get('commission');
        $motel->contract_start = Input::get('contract_start');
        $motel->contract_end = Input::get('contract_end');
        $motel->rest_time_1 = Input::get('rest_time_1');
        $motel->rest_time_2 = Input::get('rest_time_2');
        $motel->stay_time_1 = Input::get('stay_time_1');
        $motel->stay_time_2 = Input::get('stay_time_2');
        $motel->introduction = Input::get('introduction');
        $motel->equipment = Input::get('equipment');
        $motel->feature = Input::get('feature');
        $motel->edit_time = time();

        $motel->save();
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

        Motel::destroy($id);
        return Response::json(array('success_text' => 'ok'));
    }

}
