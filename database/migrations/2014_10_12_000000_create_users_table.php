<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id()->comment('사용자 ID');
            $table->string('name')->comment('사용자 이름');
            $table->string('email')->unique()->comment('사용자 이메일');
            $table->timestamp('email_verified_at')->nullable()->comment('이메일 확인 시간');
            $table->string('password')->comment('사용자 비밀번호');
            $table->rememberToken()->comment('사용자 저장 토큰');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};