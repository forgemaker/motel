<?php

class Motel extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'motels';
    protected $fillable = array('title', 'url', 'county', 'district', 'zipcode', 'address', 'phone_1', 'phone_2', 'fax', 'contact', 'mobile_1', 'mobile_2', 'commission', 'contract_start', 'contract_end', 'rest_time_1', 'rest_time_2', 'stay_time_1', 'stay_time_2', 'introduction', 'equipment', 'feature', 'raw_name', 'image_url', 'rank', 'add_time', 'edit_time');
    protected $guarded = array('id');
    public $timestamps = false;
}
