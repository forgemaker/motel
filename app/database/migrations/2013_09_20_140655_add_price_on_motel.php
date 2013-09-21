<?php

use Illuminate\Database\Migrations\Migration;

class AddPriceOnMotel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('motels', function($table) {
            $table->integer('stay_diff_price_2')->after('views')->default(0);
            $table->integer('stay_diff_price_1')->after('views')->default(0);
            $table->integer('stay_price_2')->after('views')->default(0);
            $table->integer('stay_price_1')->after('views')->default(0);
            $table->integer('rest_diff_price_2')->after('views')->default(0);
            $table->integer('rest_diff_price_1')->after('views')->default(0);
            $table->integer('rest_price_2')->after('views')->default(0);
            $table->integer('rest_price_1')->after('views')->default(0);
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
            $table->dropColumn('rest_price_1', 'rest_price_2', 'rest_diff_price_1', 'rest_diff_price_2', 'stay_price_1', 'stay_price_2', 'stay_diff_price_1', 'stay_diff_price_2');
        });
    }

}
