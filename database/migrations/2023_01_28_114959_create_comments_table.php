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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('parent_id');
            $table->text('comment_body');

            // Indexes
            $table->index('post_id', 'post_comments_idx');
            $table->index('user_id', 'comment_user_idx');
            $table->index('parent_id', 'comment_parent_idx');

            // Foreign keys
            $table->foreign('post_id', 'post_comments_post_fk')
                ->on('posts')->references('id');
            $table->foreign('user_id', 'comment_users_fk')
                ->on('users')->references('id');

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
        Schema::dropIfExists('comments');
    }
};
