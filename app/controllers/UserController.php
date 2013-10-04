<?php

class UserController extends \BaseController
{
    public $limit = 10;
    public $offset = 0;

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
        Session::put('username', 'Guest');
        Session::put('user_groups', array('Guest'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $offset = Input::get('offset', $this->offset);
        $limit = Input::get('limit', $this->limit);
        $field = Input::get('field', 'id');
        $sort = Input::get('sort', 'desc');
        $page = Input::get('page', 1);

        // get total count
        $total_counts = User::all()->count();
        $total_pages = ceil($total_counts/$limit);

        if ($page > 1) {
            $offset = ($page - 1) * $limit;
        }

        // get user list
        $items = User::ofLimit($limit)
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
     * Check user login.
     */
    public function login()
    {
        $username = Input::get('username', null);
        $password = Input::get('password', null);

        if (empty($username) or empty($password)) {
            return Response::json(array('error_text' => '帳號密碼為必填欄位'), 401);
        }

        if (!Auth::attempt(array('username' => $username, 'password' => $password), true)) {
            return Response::json(array('error_text' => '帳號或密碼錯誤'), 401);
        }

        $user = User::find(Auth::user()->id);
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
        Session::put('username', $user->username);
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
        Auth::logout();

        return Response::json(array('success_text' => 'ok'));
    }

    /**
     * Show the profile for the given user.
     */
    public function showProfile()
    {
        if (!Auth::check()) {
            $this->guest();
        }

        $data = array(
            'item' => array(
                'user_id' => Session::get('user_id'),
                'motel_id' => Session::get('motel_id'),
                'logged_in' => Session::get('logged_in'),
                'user_groups' => Session::get('user_groups'),
                'username' => Session::get('username')
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
        $item = User::find($id)->toArray();

        if (!isset($item)) {
            return Response::json(array('error_text' => '404 not found'), 404);
        }

        //$user['user_group'] = User::find($id)->groups->toArray();
        $item['all_groups'] = DB::select('select a.id, name, description, IF(b.user_id, true, false) as active from groups a left join users_groups b on b.group_id = a.id and b.user_id = ?', array($id));

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
