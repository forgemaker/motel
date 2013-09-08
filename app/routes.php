<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function() {
    return View::make('hello');
});

Route::get('user/CurrentData', 'UserController@showProfile');
Route::post('user/login', 'UserController@login');
Route::get('user/logout', 'UserController@logout');
Route::post('motel/upload', 'MotelController@upload');
Route::get('room/list/{id}', 'RoomController@sublist');
Route::get('new/list/{id}', 'NewsController@sublist');
Route::get('rank/list/{id}', 'RankController@sublist');
Route::get('order/list/{id}', 'OrderController@sublist');
Route::post('room/enable', 'RoomController@enable');
Route::resource('user', 'UserController');
Route::resource('motel', 'MotelController');
Route::resource('room', 'RoomController');
Route::resource('new', 'NewsController');
Route::resource('rank', 'RankController');
Route::resource('order', 'OrderController');
