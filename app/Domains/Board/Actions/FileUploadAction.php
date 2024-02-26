<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardFileDTO;
use App\Domains\Board\Requests\UploadReq;
use App\Services\File\FileService;
use Illuminate\Http\UploadedFile;

class FileUploadAction
{
    public function __construct(
        private FileService $service,
        private FileCreateAction $action,
    ){

    }
    public function handleRequest(UploadReq $request) {
        $file = $request['file'];
        $this->handle($file);
    }

    public function handle(UploadedFile $file): BoardFileDTO
    {
        $filePath = $this->service->store($file);
        return $this->action->handle(new BoardFileDTO(null, null, $filePath));
    }
}
