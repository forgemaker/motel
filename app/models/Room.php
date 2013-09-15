<?php

class Room extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'rooms';
    protected $fillable = array('motel_id', 'title', 'type', 'price_1', 'price_2', 'price_3', 'raw_name', 'image_url', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;
}
