<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id()->comment('사용자 PK');
            $table->string('identification')->unique()->comment('사용자 아이디');
            $table->string('name', 20)->comment('사용자 이름');
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