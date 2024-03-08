<?php

namespace App\Services\File;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class FileService
{
    private const PATH_DIRECTORY = 'public\images';
    private const PATH_URL = '/storage/images/';

    public function store(UploadedFile $file)
    {
        $directory = self::PATH_DIRECTORY;
        Log::info($directory);
        $fileName = uniqid() . '.' . $file->extension();
        $filePath = self::PATH_URL . $fileName;
        Storage::putFileAs($directory, $file, $fileName);
        return $filePath;
    }
    public function delete(string $filePath)
    {
        return Storage::delete($filePath);
    }
}
