<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes, Sluggable;

    protected $table = 'categories';
    protected $guarded = false;

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'seo_keys',
        'seo_description',
    ];

    /**
     * Setting for sluggable (field 'slug')
     *
     * @return array[]
     */
    public function sluggable(): array
    {
        return [
          'slug' => [
              'source' => 'title',
          ],
        ];
    }


}
