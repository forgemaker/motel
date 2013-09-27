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

    public function scopeOfOrderBy($query, $field = 'add_time', $sort = 'desc', $type = 'rest')
    {
        $start_time = date('N') . '1900';
        $end_time = date('N') . '2000';
        $time = date('NHi');

        if ($time <= $end_time and $time >= $start_time) {
            $price_field = 'price_1';
        } else {
            $price_field = 'price_2';
        }

        if ($field == 'price') {
            $field = $type . '_' . $price_field;
        } elseif ($field == 'diff_price') {
            $field = $type . '_diff_' . $price_field;
        }

        return $query->orderBy($field, $sort);
    }

    public function scopeOfRoomCount($query, $ignore = '0')
    {
        if (empty($ignore)) {
            return $query;
        }

        return $query->where('room_count', '!=', 0);
    }

    public function scopeOfWhereIn($query, $id = array())
    {
        if (empty($id)) {
            return $query;
        }

        return $query->whereIn('id', $id);
    }

    public function scopeOfLimit($query, $limit = null)
    {
        if (empty($limit)) {
            return $query;
        }

        return $query->take(intval($limit));
    }

    public function scopeOfOffset($query, $offset = null)
    {
        if (empty($offset)) {
            return $query;
        }

        return $query->skip(intval($offset));
    }
}
