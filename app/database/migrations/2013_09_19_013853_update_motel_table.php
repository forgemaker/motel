<?php

use Illuminate\Database\Migrations\Migration;

class UpdateMotelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('motels', function($table) {
            $table->decimal('rank', 2, 1)->after('latitude')->default('0.0');
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
            $table->dropColumn('rank');
        });
    }

}
