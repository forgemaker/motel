<?php

class UserController extends \BaseController
{
    public function __construct()
    {
        $this->group[1] = 'Admin';
        $this->group[2] = 'User';
    }

    public function guest()
    {
        // add user data to session
        Session::put('user_id', -1);
        Session::put('motel_id', -1);
        Session::put('logged_in', false);
        Session::put('first_name', 'Guest');
        Session::put('last_name', '');
        Session::put('user_groups', array('Guest'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // get user list
        $users = User::all()->toArray();

        $data = array(
            'items' => $users
        );
        return Response::json($data);
    }

    /**
     * Check user login.
     */
    public function login()
    {
        $username = Input::get('username');
        $password = Input::get('password');

        $user = User::where('username', Input::get('username'))->first();

        if (!$user) {
            return Response::json(array('error_text' => 'Invaild login'));
        }

        $login = (Hash::check($password, $user->password)) ? true : false;

        if (!$login) {
            return Response::json(array('error_text' => 'Invaild login'));
        }

        $user_group = array();
        $group = User::find($user['id'])->groups->toArray();
        foreach ($group as $row) {
            $user_group[] = $this->group[$row['group_id']];
        }

        // update user last login time
        $user->last_login = time();
        $user->save();

        // add user data to session
        Session::put('user_id', $user->id);
        Session::put('motel_id', $user->motel_id);
        Session::put('logged_in', true);
        Session::put('first_name', $user->first_name);
        Session::put('last_name', $user->last_name);
        Session::put('user_groups', $user_group);

        return Response::json(array('success_text' => 'ok'));
    }

    /**
     * user logout.
     */
    public function logout()
    {
        Session::flush();
        $this->guest();
        return Response::json(array('success_text' => 'ok'));
    }

    /**
     * Show the profile for the given user.
     */
    public function showProfile()
    {
        if (!Session::has('logged_in')) {
            $this->guest();
        }

        $data = array(
            'item' => array(
                'user_id' => Session::get('user_id'),
                'motel_id' => Session::get('motel_id'),
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
        }

        $password = Input::get('password');
        $confirm_password = Input::get('confirm_password');
        if (empty($password) or empty($confirm_password)) {
            return Response::json(array('error_text' => '兩次密碼輸入不同'));
        }

        // insert user account.
        $user = User::create(array(
            'username' => Input::get('username'),
            'password' => Hash::make(Input::get('password')),
            'motel_id' => Input::get('motel_id', null),
            'first_name' => Input::get('first_name'),
            'last_name' => Input::get('last_name'),
            'created_on' => time(),
            'last_login' => null,
            'active' => 1,
            'ip_address' => Request::getClientIp()
        ));

        $id = User::where('username', Input::get('username'))->first()->id;
        // add default group id
        UserGroup::create(array(
            'user_id' => $id,
            'group_id' => USER
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
        $user = User::find($id)->toArray();
        //$user['user_group'] = User::find($id)->groups->toArray();
        $user['all_groups'] = DB::select('select a.id, name, description, IF(b.user_id, true, false) as active from groups a left join users_groups b on b.group_id = a.id and b.user_id = ?', array($id));

        $data = array(
            'item' => $user
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

        if (Input::has('motel_id')) {
            $user->motel_id = Input::get('motel_id', null);
        }

        $user->username = Input::get('username');
        $user->first_name = Input::get('first_name');
        $user->last_name = Input::get('last_name');

        $user->save();

        if (Input::has('user_groups')) {
            UserGroup::where('user_id', $id)->delete();
            $user_groups = Input::get('user_groups');

            foreach ($user_groups as $row) {
                UserGroup::create(array(
                    'user_id' => $id,
                    'group_id' => $row
                ));
            }
        }
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
