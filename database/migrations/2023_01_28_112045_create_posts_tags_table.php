<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts_tags', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('tag_id');

            // Indexes
            $table->index('post_id', 'posts_tags_post_idx');
            $table->index('tag_id', 'posts_tags_tag_idx');

            // Foreign keys
            $table->foreign('post_id', 'post_tags_post_fk')->on('posts')
                ->references('id');
            $table->foreign('tag_id', 'post_tags_tag_fk')->on('tags')
                ->references('id');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts_tags');
    }
};
