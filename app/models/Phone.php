<?php

class Phone extends Eloquent
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'phones';
    protected $fillable = array('uid', 'coupon', 'add_time', 'edit_time');
    protected $guarded = array('id');
    public $timestamps = false;

    public $limit = 10;
    public $offset = 0;

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

    public function scopeOfMotel($query, $uid = null)
    {
        if (!isset($uid)) {
            return $query;
        }

        return $query->where('uid', $uid);
    }
}
