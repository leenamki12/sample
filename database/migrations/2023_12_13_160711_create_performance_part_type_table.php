<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('performance_part_type', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('part_type_id')->comment('파트 ID');
            $table->unsignedBigInteger('performance_id')->comment('공연 ID');
            $table->timestamps();

            $table->foreign('part_type_id')->references('id')->on('part_types')->onDelete('cascade');
            $table->foreign('performance_id')->references('id')->on('performances')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('performance_part_type');
    }
};