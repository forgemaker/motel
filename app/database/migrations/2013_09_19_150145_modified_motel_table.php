<?php

use Illuminate\Database\Migrations\Migration;

class ModifiedMotelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('motels', function($table) {
            $table->dropColumn('longitude');
            $table->dropColumn('latitude');
        });

        Schema::table('motels', function($table) {
            $table->decimal('longitude', 11, 8);
            $table->decimal('latitude', 10, 8);
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
