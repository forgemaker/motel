<?php

class AuthController extends BaseController
{

    /**
     * Show the profile for the given user.
     */
    public function showProfile($id)
    {
        return View::make('hello');
    }

}
