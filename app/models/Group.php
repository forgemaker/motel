<?php

class Group extends Eloquent {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'groups';
    protected $guarded = array('id');
    public $timestamps = false;

}
