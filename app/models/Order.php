<?php

class Order extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'orders';
    protected $fillable = array('motel_id', 'uid', 'user_name', 'user_phone', 'room_title', 'room_type', 'serial_number', 'total_price', 'date_purchased', 'date_finished', 'status_id', 'rank', 'title', 'description', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;
}
