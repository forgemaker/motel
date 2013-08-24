<?php

class Room extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'rooms';
    protected $fillable = array('motel_id', 'title', 'rest_1_price', 'rest_2_price', 'rest_3_price', 'stay_1_price', 'stay_2_price', 'stay_3_price', 'raw_name', 'image_url', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;
}
