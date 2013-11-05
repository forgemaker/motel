<?php

class PhoneController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int      $id
     * @return Response
     */
    public function show($uid = null)
    {
        if (!isset($uid) or empty($uid)) {
            return Response::json(array('error_text' => '請輸入手機 UID'), 401);
        }

        $phone = Phone::ofUid($uid)->get();

        if (empty($phone->toArray())) {
            return Response::json(array('error_text' => '無此資料'), 404);
        }

        $data = array(
            'item' => $phone->toArray()[0]
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int      $id
     * @return Response
     */
    public function update($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int      $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

}
