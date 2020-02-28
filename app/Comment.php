<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class  Comment extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['course_id', 'comment'];

    /**
     * @var bool
     */
    public $timestamps = false;
}
