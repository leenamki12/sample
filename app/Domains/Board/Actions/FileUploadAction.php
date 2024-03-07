<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardFileDTO;
use App\Domains\Board\Requests\UploadReq;
use App\Domains\Board\Responses\UploadRes;
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
        $file = $request['image'];
        return $this->handle($file);
    }

    public function handle(UploadedFile $file): UploadRes
    {
        $filePath = $this->service->store($file);
        $fileDTO = $this->action->handle(new BoardFileDTO(null, null, $filePath));
        return new UploadRes($fileDTO->id, env('APP_URL') . $fileDTO->file_path);
    }
}
