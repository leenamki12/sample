<?php

use App\Http\Web\Admin\NoticeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::middleware(['role:admin'])->prefix('admin')->group(function () {
        Route::post('notice', [NoticeController::class, 'store'])->name('admin.notice.store');
        Route::post('notice/upload', [NoticeController::class, 'upload'])->name('admin.notice.upload');
        Route::put('notice/{id}', [NoticeController::class, 'update'])->name('admin.notice.update');
        Route::get('notice/create', [NoticeController::class, 'create'])->name('admin.notice.create');
        Route::get('notice/{id}', [NoticeController::class, 'show'])->name('admin.notice.show');
        Route::get('notice', [NoticeController::class, 'index'])->name('admin.notice.index');
        Route::post('notice/search', [NoticeController::class, 'search'])->name('admin.notice.search');
        Route::post('notice/delete', [NoticeController::class, 'delete'])->name('admin.notice.delete');
        Route::delete('notice/{id}', [NoticeController::class, 'destroy'])->name('admin.notice.destroy');
    });
});
