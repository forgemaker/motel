<?php

use Illuminate\Database\Migrations\Migration;

class UpdateMotelColumnTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('motels', function($table) {
            $table->integer('rest_room_id')->after('id')->unsigned()->nullable();
            $table->integer('stay_room_id')->after('id')->unsigned()->nullable();
            $table->foreign('rest_room_id')->references('id')->on('rooms')->onUpdate('cascade')->onDelete('set null');
            $table->foreign('stay_room_id')->references('id')->on('rooms')->onUpdate('cascade')->onDelete('set null');
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
            $table->dropForeign('motels_rest_room_id_foreign');
            $table->dropForeign('motels_stay_room_id_foreign');
            $table->dropColumn('rest_room_id');
            $table->dropColumn('stay_room_id');
        });
    }

}
