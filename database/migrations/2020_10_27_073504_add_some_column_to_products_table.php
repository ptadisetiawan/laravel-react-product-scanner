<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSomeColumnToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('partai_1')->after('harga')->nullable();
            $table->string('harga_partai_1')->after('partai_1')->nullable();
            $table->string('partai_2')->after('harga_partai_1')->nullable();
            $table->string('harga_partai_2')->after('partai_2')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('partai_1');
            $table->dropColumn('harga_partai_1');
            $table->dropColumn('partai_2');
            $table->dropColumn('harga_partai_2');
        });
    }
}
