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
            $table->string('file_path', 255)->comment('파일 경로');
            $table->unsignedInteger('order_sequence')->comment('파일 순서');
            $table->boolean('main_image')->comment('대표 이미지');
            $table->timestamps();

            $table->foreign('performance_id')
                ->references('id')
                ->on('performances')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('performance_image');
    }
};