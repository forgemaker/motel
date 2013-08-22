<?php

class UserController extends \BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // get user list
        $users = DB::table('users')->get();

        $data = array(
            'items' => $users
        );
        return Response::json($data);
    }

    /**
     * Show the profile for the given user.
     */
    public function showProfile()
    {
        Session::put('logged_in', true);
        Session::put('first_name', 'Bo-Yi');
        Session::put('last_name', 'Wu');
        Session::put('user_groups', array('Admin', 'User'));
        $data = array(
            'item' => array(
                'logged_in' => Session::get('logged_in'),
                'user_groups' => Session::get('user_groups'),
                'first_name' => Session::get('first_name'),
                'last_name' => Session::get('last_name')
            )
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
        $count = User::where('username', Input::get('username'))->count();
        if ($count > 0) {
            return Response::json(array('error_text' => '帳號已存在'));
            exit();
        }

        // insert user account.
        $user = User::create(array(
            'username' => Input::get('username'),
            'password' => Hash::make(Input::get('password')),
            'first_name' => Input::get('first_name'),
            'last_name' => Input::get('last_name'),
            'created_on' => time(),
            'last_login' => null,
            'ip_address' => Request::getClientIp()
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
        $user = User::find($id);
        $data = array(
            'item' => array(
                'id' => $user->id,
                'username' => $user->username,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name
            )
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
        $user = User::find($id);

        if (Input::has('password')) {
            $password = Input::get('password');
            $confirm_password = Input::get('confirm_password');
            if (!empty($password) and ($password == $confirm_password)) {
                $user->password = Hash::make($password);
            }
        }

        $user->username = Input::get('username');
        $user->first_name = Input::get('first_name');
        $user->last_name = Input::get('last_name');

        $user->save();
        return Response::json(array('success_text' => 'ok'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int      $id
     * @return Response
     */
    public function destroy($id = null)
    {
        $id = (Input::has('id') and is_array(Input::get('id'))) ? Input::get('id') : intval($id);

        User::destroy($id);
        return Response::json(array('success_text' => 'ok'));
    }

}
