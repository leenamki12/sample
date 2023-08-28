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
        Schema::create('reservations', function (Blueprint $table) {
            $table->comment('예약문의 테이블');

            $table->id()->comment('예약 ID');
            $table->tinyInteger('hospital_id')->comment('병원 ID');
            $table->string('company_name', 100)->comment('기업명');
            $table->date('reservation_date')->comment('예약 희망 일자');
            $table->string('name', 100)->comment('예약자명');
            $table->string('phone', 11)->comment('예약자 연락처');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};