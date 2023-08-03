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
        Schema::create('companys', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->comment('기업 ID');
            $table->unsignedBigInteger('user_id')->comment('유저 ID');
            $table->string('name', 100)->comment('기업 이름');
            $table->string('address', 100)->comment('기업 주소');
            $table->string('businessNumber', 20)->comment('사업자 번호');
            $table->enum('approvalStatus', ['waiting', 'stopped', 'completed'])->comment('기업 상태 대기 | 정지 | 완료');
            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companys');
    }
};