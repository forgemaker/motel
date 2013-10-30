<?php

use Illuminate\Database\Migrations\Migration;

class UpdateOrdersField extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function($table) {
            $table->integer('room_id')->unsigned()->nullable()->after('id');
            $table->foreign('room_id')->references('id')->on('rooms')->onUpdate('cascade')->onDelete('set null');
            $table->smallInteger('is_weekend')->default(0)->nullable()->after('date_finished');
            $table->dateTime('enter_time')->nullable()->after('date_finished');
            $table->text('room_data')->nullable()->after('date_finished');
            $table->text('motel_data')->nullable()->after('date_finished');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function($table) {
            $table->dropForeign('orders_room_id_foreign');
            $table->dropColumn('room_id');
            $table->dropColumn('is_weekend', 'enter_time', 'room_data', 'motel_data');
        });
    }

}