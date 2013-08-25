<?php

class Rank extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ranks';
    protected $fillable = array('motel_id', 'title', 'description', 'rank', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;
}
