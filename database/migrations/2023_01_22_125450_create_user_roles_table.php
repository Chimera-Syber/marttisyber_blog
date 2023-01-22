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
        Schema::create('user_roles', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->integer('role_id');

            // Index
            $table->index('user_id', 'user_roles_user_id_idx');
            $table->index('role_id', 'user_roles_role_id_idx');

            // Foreign key
            $table->foreign('user_id', 'user_roles_user_id_fk')->on('users')->references('id');
            $table->foreign('role_id', 'user_roles_role_id_fk')->on('roles')->references('id');

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
        Schema::dropIfExists('user_roles');
    }
};
