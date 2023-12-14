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
        Schema::create('performances', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255)->comment('공연 제목');
            $table->datetime('date_and_time')->comment('공연 시간');
            $table->string('address', 255)->comment('공연 장소');
            $table->unsignedBigInteger('image_id')->nullable()->comment('대표이미지');
            $table->boolean('hidden')->default(false)->comment('숨김 처리');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('performances');
    }
};