<?php

class Rank extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ranks';
    protected $fillable = array('motel_id', 'uid', 'title', 'description', 'rank', 'add_time', 'edit_time');
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

    public function scopeOfMotel($query, $motel_id = null)
    {
        if (!isset($motel_id) or $motel_id == 'all') {
            return $query;
        }

        return $query->where('motel_id', intval($motel_id));
    }
}
