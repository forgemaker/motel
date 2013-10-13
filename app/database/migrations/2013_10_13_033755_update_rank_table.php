<?php

use Illuminate\Database\Migrations\Migration;

class UpdateRankTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function($table) {
            $table->smallInteger('rank', 1)->default(1)->after('status_id');
            $table->text('description')->nullable()->after('status_id');
            $table->string('title', 255)->nullable()->after('status_id');
        });

        Schema::drop('ranks');
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
