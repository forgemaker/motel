<?php

use Illuminate\Database\Migrations\Migration;

class AddWeekendFlag extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('motels', function($table) {
            $table->smallInteger('is_weekend')->default(0)->nullable()->after('image_url');
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
            $table->dropColumn('is_weekend');
        });
    }

}
