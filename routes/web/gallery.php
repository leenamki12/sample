<?php

use App\Http\Web\Admin\GalleryController;
use Illuminate\Support\Facades\Route;

Route::middleware(['role:admin'])->prefix('admin')->group(function () {
    Route::post('gallery/create', [GalleryController::class, 'store'])->name('admin.gallery.store');
    Route::post('gallery/upload', [GalleryController::class, 'upload'])->name('admin.gallery.upload');
    Route::put('gallery/{id}', [GalleryController::class, 'update'])->name('admin.gallery.update');
    Route::get('gallery/create', [GalleryController::class, 'create'])->name('admin.gallery.create');
    Route::get('gallery/{id}', [GalleryController::class, 'show'])->name('admin.gallery.show');
    Route::get('gallery', [GalleryController::class, 'index'])->name('admin.gallery.index');
    Route::delete('gallery/delete', [GalleryController::class, 'delete'])->name('admin.gallery.delete');
});
