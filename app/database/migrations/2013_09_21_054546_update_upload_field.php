<?php

use Illuminate\Database\Migrations\Migration;

class UpdateUploadField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rooms', function($table) {
            $table->dropColumn('image_url', 'raw_name');
        });

        Schema::table('rooms', function($table) {
            $table->text('raw_name')->after('price_3');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rooms', function($table) {
            $table->dropColumn('raw_name');
        });

        Schema::table('rooms', function($table) {
            $table->string('raw_name', 255);
            $table->string('image_url', 255);
        });
    }

}
