<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

// Carbon
use Carbon\Carbon;

// Models
use App\Models\Category;
use App\Models\Tag;
use App\Models\Comment;


class Post extends Model
{
    use HasFactory, SoftDeletes, Sluggable;

    protected $fillable = [
        'title',
        'description',
        'content',
        'preview_image',
        'seo_keys',
        'seo_description',
    ];

    protected $table = 'posts';
    protected $guarded = false;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'fulltitle'
            ]
        ];
    }

    /**
     * Setting for slug
     * Current date (only day-month-year) + title
     *
     * @return string
     */
    public function getFulltitleAttribute(): string
    {
        return date('j-m-y') . $this->title;
    }

    /**
     * Relation with Category class
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    /**
     * Relation with Tag class
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'posts_tags', 'post_id', 'tag_id')->withTimestamps();
    }

    /**
     * Relation with Comment class
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id');
    }

    /**
     * Carbon for Russian date
     * @return Carbon|string
     */
    public function getDateAsCarbonAttribute() {

        return Carbon::parse($this->created_at)->locale('ru');

    }

    /**
     * Comments count
     * @return mixed
     */
    public function commentsCount()
    {
        return Comment::where('post_id', $this->id)->count();
    }

}
