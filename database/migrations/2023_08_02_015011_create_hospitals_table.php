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
        {
            Schema::create('hospitals', function (Blueprint $table) {
                $table->id()->comment('병원 아이디');
                $table->unsignedBigInteger('user_id')->comment('유저 아이디');
                $table->string('name', 100)->comment('병원 이름');
                $table->string('location', 100)->comment('병원 주소');
                $table->string('registrationNumber', 10)->comment('사업자 등록번호');
                $table->string('hospitalNumber', 11)->comment('병원 대표번호');
                $table->enum('approvalStatus', ['waiting', 'stopped', 'completed'])->default('waiting')->comment('병원 상태 대기 | 정지 | 완료');
                $table->timestamps();
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->comment('외래키 정의');
            });

            DB::statement("ALTER TABLE hospitals COMMENT='병원 유저정보'");
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hospitals');
    }
};
