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

    /**
     * Relationship with model
     *
     */
    public function motel()
    {
        return $this->belongsTo('Motel');
    }

    public function scopeOfOrderBy($query, $field = 'add_time', $sort = 'desc')
    {
        return $query->orderBy($field, $sort);
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

    public function scopeOfMotel($query, $motel_id = null)
    {
        if (!isset($motel_id) or $motel_id == 'all') {
            return $query;
        }

        return $query->where('motel_id', intval($motel_id));
    }
}
