<?php


use App\Http\Web\Client\NoticeController;
use Illuminate\Support\Facades\Route;

Route::prefix('notice')->group(function () {
    Route::get('/', [NoticeController::class, 'index'])->name('notice');
});
