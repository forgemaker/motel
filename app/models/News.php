<?php

class News extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'news';
    protected $fillable = array('motel_id', 'type', 'title', 'description', 'start_time', 'end_time', 'raw_name', 'image_url', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;
}
