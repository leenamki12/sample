<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Models\BoardFile;
use App\Services\File\FileService;
use Carbon\Carbon;

class FileUnusedDeleteAction
{
    public function __construct(
        private FileService $fileService
    )
    {

    }

    public function handle()
    {
        // FK 가 null 인 동시에 작성일로 부터 7일 지난 파일만 검색
        $files = BoardFile::whereNull('board_id')->where('created_at', '<', Carbon::now()->subWeek());
        foreach($files->get() as $file) {
            $this->fileService->delete($file->file_path);
            $file->delete();
        }
    }
}
