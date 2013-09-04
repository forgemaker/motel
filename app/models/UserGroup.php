<?php

class UserGroup extends Eloquent {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users_groups';
    protected $guarded = array('id');
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('User');
    }

}
