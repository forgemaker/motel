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
    public function sublist($id = null)
    {
        $offset = Input::get('offset', null);
        $limit = Input::get('limit', null);

        $items = Rank::with('motel')->OfMotel($id)->ofLimit($limit)->ofOffset($offset)->orderBy('add_time', 'desc')->get();

        $data = array(
            'count' => count($items->toArray()),
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

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $rank = Rank::create(array(
            'motel_id' => Input::get('motel_id'),
            'uid' => Input::get('uid', null),
            'rank' => Input::get('rank', 1),
            'title' => Input::get('title', null),
            'description' => Input::get('description', null),
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
        $item = Rank::find($id);

        if (!isset($item)) {
            return Response::json(array('error_text' => '404 not found'), 404);
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
        $item = Rank::find($id)->toArray();
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
        $rank = Rank::find($id);

        $rank->title = Input::get('title');
        $rank->uid = Input::get('uid');
        $rank->rank = Input::get('rank', 1);
        $rank->title = Input::get('title', null);
        $rank->description = Input::get('description', null);
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
