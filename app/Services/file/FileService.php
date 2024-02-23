<?php

namespace App\Services\File;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileService
{
    private const DIRECTORY = '/app/public/images';

    public function store(UploadedFile $file)
    {
        $directory = storage_path(self::DIRECTORY);
        $fileName = uniqid() . '_' . $file->getClientOriginalName();
        $filePath = $directory . '/' . $fileName;
        Storage::putFileAs($directory, $file, $fileName);
        return $filePath;
    }
    public function delete(string $filePath)
    {
        return Storage::delete($filePath);
    }
}
