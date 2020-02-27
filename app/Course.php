<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'name',
        'author',
        'description',
        'link',
        'img',
    ];

    protected $appends = [
      'liked'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function likes()
    {
        return $this->hasMany(Like::class, 'course_id');
    }

    /**
     * @return bool
     */
    public function getLikedAttribute()
    {
        return in_array($this->id, $this->likes->pluck('course_id')->toArray());
    }
}
