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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('description')->nullable();
            $table->text('content');
            $table->string('preview_image')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('category_id');
            $table->integer('views')->unsigned()->default(0);
            $table->string('seo_keys')->nullable();
            $table->string('seo_description')->nullable();
            $table->tinyInteger('is_public')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->index('category_id', 'post_category_idx');
            $table->foreign('category_id', 'post_category_fk')->on('categories')
                ->references('id');

            $table->index('user_id', 'post_user_idx');
            $table->foreign('user_id', 'post_user_fk')->on('users')
                ->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
