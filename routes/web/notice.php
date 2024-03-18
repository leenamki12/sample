<?php

use App\Http\Web\Admin\NoticeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['role:admin'])->prefix('admin')->group(function () {
    Route::post('notice/create', [NoticeController::class, 'store'])->name('admin.notice.store');
    Route::post('notice/upload', [NoticeController::class, 'upload'])->name('admin.notice.upload');
    Route::put('notice/{id}', [NoticeController::class, 'update'])->name('admin.notice.update');
    Route::get('notice/create', [NoticeController::class, 'create'])->name('admin.notice.create');
    Route::get('notice/{id}', [NoticeController::class, 'show'])->name('admin.notice.show');
    Route::get('notice', [NoticeController::class, 'index'])->name('admin.notice.index');
    Route::delete('notice/delete', [NoticeController::class, 'delete'])->name('admin.notice.delete');
});
