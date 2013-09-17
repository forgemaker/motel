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
     * Upload file.
     *
     * @return Response
     */
    public function upload()
    {
        $upload_folder = 'uploads';
        if (!file_exists($upload_folder)) {
            mkdir($upload_folder, 0700);
        }

        if (Input::hasFile('upload_file')) {
            mt_srand();
            $filename = md5(uniqid(mt_rand())) . '.' . strtolower(Input::file('upload_file')->getClientOriginalExtension());
            Input::file('upload_file')->move($upload_folder, $filename);
            $data = array(
                'file_name' => $filename,
                'path' => $upload_folder . '/' . $filename
            );
            return Response::json($data);
        }
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
            'raw_name' => Input::get('raw_name'),
            'image_url' => Input::get('image_url'),
            'longitude' => Input::get('longitude', null),
            'latitude' => Input::get('latitude', null),
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
        $item = Motel::find($id)->toArray();

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
        $item = Motel::find($id)->toArray();

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
        $motel->raw_name = Input::get('raw_name');
        $motel->image_url = Input::get('image_url');
        $motel->longitude = Input::get('longitude');
        $motel->latitude = Input::get('latitude');
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
