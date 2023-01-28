<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

// Models
use App\Models\Post;

class Tag extends Model
{
    use HasFactory, SoftDeletes, Sluggable;

    protected $fillable = [
        'title',
        'description',
        'seo_keys',
        'seo_description'
    ];
    protected $table = 'tags';
    protected $guarded = false;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array[]
     */
    public function sluggable(): array
    {
        return [
          'slug' => [
              'source' => 'title',
          ]
        ];
    }

    /**
     * Relation with Post class
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class, 'posts_tags', 'tag_id', 'post_id')->withTimestamps();
    }



}
