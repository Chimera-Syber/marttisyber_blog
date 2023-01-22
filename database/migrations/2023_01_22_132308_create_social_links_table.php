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
        Schema::create('social_links', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id')->unique();
            $table->string('github');
            $table->string('youtube');
            $table->string('vk');
            $table->string('telegram');
            $table->string('linkedin');
            $table->string('twitter');

            $table->timestamps();
            $table->softDeletes();

            // Index
            $table->index('user_id', 'social_links_user_id_idx');

            // Foreign
            $table->foreign('user_id', 'social_links_user_id_fk')
                ->on('users')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_links');
    }
};
