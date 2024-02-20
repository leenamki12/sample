<?php

use App\Domains\Board\Models\Types\BoardType;
use App\Domains\Board\Models\Types\FaqCategoryType;
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
        Schema::create('boards', function (Blueprint $table) {
            $table->id();
            $table->enum('type', BoardType::values())->comment("보드 유형");
            $table->string('title', 100)->comment("게시글 제목");
            $table->boolean('is_published')->comment("노출 여부");
            $table->timestamps();
        });

        Schema::create('board_mains', function (Blueprint $table) {
            $table->foreignId('board_id')->comment("게시글 ID")->constrained();
        });

        Schema::create('board_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('board_id')->comment("게시글 ID")->constrained();
            $table->string('file_path', 200)->comment("파일 경로");
            $table->timestamps();
        });

        Schema::create('board_notices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('board_id')->comment("게시글 ID")->constrained();
            $table->longText('content')->comment("게시글 내용");
            $table->timestamps();
        });

        Schema::create('board_faqs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('board_id')->comment("게시글 ID")->constrained();
            $table->enum('category', FaqCategoryType::values())->comment("카테고리");
            $table->longText('content')->comment("게시글 내용");
            $table->timestamps();
        });

        Schema::create('board_galleries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('board_id')->comment("게시글 ID")->constrained();
            $table->integer('year')->comment("년도");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boards');
    }
};
