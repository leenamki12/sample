<?php

use App\Http\Web\Admin\NoticeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::middleware(['role:admin'])->prefix('admin')->group(function () {
        // Route::post('notice', [NoticeController::class, 'store']);
        Route::post('notice/upload', [NoticeController::class, 'upload'])->name('admin.notice.upload');
        // Route::put('notice/{id}', [NoticeController::class, 'update']);
        Route::get('notice/create', [NoticeController::class, 'create'])->name('admin.notice.create');
        // Route::get('notice/{id}', [NoticeController::class, 'show']);
        Route::get('notice', [NoticeController::class, 'index'])->name('admin.notice');
        Route::post('notice/search', [NoticeController::class, 'search'])->name('admin.notice.search');
        // Route::delete('notice/{id}', [NoticeController::class, 'destroy']);
    });
});
