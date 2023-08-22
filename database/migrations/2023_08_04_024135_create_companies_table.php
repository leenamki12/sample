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
        Schema::create('company_details', function (Blueprint $table) {
            $table->id()->comment('기업 상세 ID');
            $table->string('name', 100)->comment('기업 이름');
            $table->string('address', 100)->comment('주소');
            $table->string('address_detail', 100)->nullable()->comment('상세 주소');
            $table->string('postal_code', 5)->comment('우편번호');
            $table->string('business_license', 100)->comment('사업자 등록증');
            $table->unsignedInteger('employees')->comment('임직원수');
            $table->timestamps();
        });

        Schema::create('companies', function (Blueprint $table) {
            $table->id()->comment('기업 ID');
            $table->unsignedBigInteger('user_id')->comment('유저 ID');
            $table->unsignedBigInteger('detail_id')->comment('상세 ID');
            $table->enum('approval_status', ['waiting', 'stopped', 'completed'])->comment('기업 상태 대기 | 정지 | 완료');
            $table->string('auth_code', 6)->comment('인증 코드');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('detail_id')->references('id')->on('company_details');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
        Schema::dropIfExists('company_details');
    }
};