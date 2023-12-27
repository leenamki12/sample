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
        Schema::create('performance_image', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('performance_id');
            $table->unsignedBigInteger('image_id');
            $table->timestamps();

            $table->foreign('performance_id')
                ->references('id')
                ->on('performances')
                ->onDelete('cascade');

            $table->foreign('image_id')
                ->references('id')
                ->on('images')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('performance_images');
    }
};