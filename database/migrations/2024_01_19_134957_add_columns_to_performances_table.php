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
        Schema::table('performances', function (Blueprint $table) {
            //
            $table->boolean('main_visible')->default(true)->comment('메인 페이지에 노출 여부');
            $table->datetime('end_date_time')->nullable()->comment('공연 종료 시간');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('performances', function (Blueprint $table) {
            // 추가한 컬럼 제거
            $table->dropColumn(['main_visible', 'end_date_time']);
        });
    }
};