<?php

class Room extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'rooms';
    protected $fillable = array('motel_id', 'title', 'type', 'price_1', 'price_2', 'price_3', 'raw_name', 'add_time', 'edit_time');
    protected $guarded = array('id', 'motel_id');
    public $timestamps = false;

    public $limit = 10;
    public $offset = 0;

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

    public function scopeOfActive($query, $active = null)
    {
        if (!isset($active)) {
            return $query;
        }

        return $query->where('active', intval($active));
    }

    public function scopeOfLimit($query, $limit = null)
    {
        $limit = (isset($limit)) ? intval($limit) : $this->limit;

        return $query->take($limit);
    }

    public function scopeOfOffset($query, $offset = null)
    {
        $offset = (isset($offset)) ? intval($offset) : $this->offset;

        return $query->skip($offset);
    }

    public function scopeOfType($query, $type = null)
    {
        if (!isset($type)) {
            return $query;
        }

        return $query->where('type', $type);
    }

    public function scopeOfMotel($query, $motel_id = null)
    {
        if (!isset($motel_id) or $motel_id == 'all') {
            return $query;
        }

        return $query->where('motel_id', intval($motel_id));
    }
}
