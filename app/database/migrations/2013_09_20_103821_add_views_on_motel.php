<?php

use Illuminate\Database\Migrations\Migration;

class AddViewsOnMotel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('motels', function($table) {
            $table->integer('views')->after('rank')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('motels', function($table) {
            $table->dropColumn('views');
        });
    }

}
