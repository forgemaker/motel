<?php

class RankController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $ranks = Rank::all()->toArray();

        $data = array(
            'items' => $ranks
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
        $ranks = Rank::where('motel_id', $id)->get()->toArray();

        $data = array(
            'items' => $ranks
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
        $rank = Rank::create(array(
            'motel_id' => Input::get('motel_id'),
            'rank' => Input::get('rank', 1),
            'title' => Input::get('price_1', null),
            'description' => Input::get('price_2', null),
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
        $rank = Rank::find($id)->toArray();
        $data = array(
            'item' => $rank
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
        $rank = Rank::find($id);

        $rank->title = Input::get('title');
        $rank->type = Input::get('type', 0);
        $rank->price_1 = Input::get('price_1', 0);
        $rank->price_2 = Input::get('price_2', 0);
        $rank->price_3 = Input::get('price_3', 0);
        $rank->raw_name = Input::get('raw_name');
        $rank->image_url = Input::get('image_url');
        $rank->edit_time = time();

        $rank->save();
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

        Rank::destroy($id);
        return Response::json(array('success_text' => 'ok'));
    }

}
