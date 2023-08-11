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
        Schema::create('user_verifys', function (Blueprint $table) {
            $table->id();
            $table->string('phone', 16)->comment('검증할 휴대폰 번호');
            $table->string('code', 6)->comment('인증 번호');
            $table->enum('status', ['effective', 'not_valid', 'completed'])->comment('인증코드 유효 | 유효하지 않음 | 인증 완료');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_verifys');
    }
};