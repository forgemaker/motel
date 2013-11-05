<?php

use Illuminate\Database\Migrations\Migration;

class CreatePhonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phones', function($table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('uid', 100)->unique();
            $table->integer('coupon');
            $table->integer('add_time');
            $table->integer('edit_time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }

}
