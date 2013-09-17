<?php

class NewsController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $news = News::all()->toArray();

        $data = array(
            'items' => $news
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
        $type = Input::get('type', null);
        $offset = Input::get('offset', null);
        $limit = Input::get('limit', null);

        $items = News::with('motel')->ofType($type)->OfMotel($id)->ofLimit($limit)->ofOffset($offset)->orderBy('add_time', 'desc')->get();

        $data = array(
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
        $new = News::create(array(
            'motel_id' => Input::get('motel_id'),
            'type' => Input::get('type', 0),
            'title' => Input::get('title'),
            'description' => Input::get('description'),
            'start_time' => Input::get('start_time'),
            'end_time' => Input::get('end_time'),
            'raw_name' => Input::get('raw_name'),
            'image_url' => Input::get('image_url'),
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
        $item = News::with('motel')->find($id);

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
        $new = News::find($id)->toArray();
        $data = array(
            'item' => $new
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
        $new = News::find($id);

        $new->title = Input::get('title');
        $new->type = Input::get('type');
        $new->description = Input::get('description');
        $new->start_time = Input::get('start_time');
        $new->end_time = Input::get('end_time');
        $new->raw_name = Input::get('raw_name');
        $new->image_url = Input::get('image_url');
        $new->edit_time = time();

        $new->save();
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

        News::destroy($id);
        return Response::json(array('success_text' => 'ok'));
    }

}
