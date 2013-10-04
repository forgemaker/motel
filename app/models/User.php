<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */

    protected $fillable = array('first_name', 'last_name', 'username', 'email', 'password', 'ip_address', 'active', 'created_on', 'last_login');
    protected $guarded = array('id');
    public $timestamps = false;

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

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password;
    }

    /**
     * Get the e-mail address where password reminders are sent.
     *
     * @return string
     */
    public function getReminderEmail()
    {
        return $this->email;
    }

    public function groups()
    {
        return $this->hasMany('UserGroup', 'user_id');
    }

}
