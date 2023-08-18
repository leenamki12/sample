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
            $table->boolean('status')->comment('인증 번호 유효 여부');
            $table->timestamp('expiration_at')->comment('인증번호 유효 시간');
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
