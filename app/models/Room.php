<?php

class Room extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'rooms';
    protected $fillable = array('motel_id', 'title', 'rest_price_1', 'rest_price_2', 'rest_price_3', 'stay_price_1', 'stay_price_2', 'stay_price_3', 'raw_name', 'image_url', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;
}
