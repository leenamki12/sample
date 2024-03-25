<?php

use App\Http\Web\Admin\FaqController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::middleware(['role:admin'])->prefix('admin')->group(function () {
        Route::post('faq', [FaqController::class, 'store'])->name('admin.faq.store');
        Route::put('faq/{id}', [FaqController::class, 'update'])->name('admin.faq.update');
        Route::get('faq/create', [FaqController::class, 'create'])->name('admin.faq.create');
        Route::get('faq/{id}', [FaqController::class, 'show'])->name('admin.faq.show');
        Route::get('faq', [FaqController::class, 'index'])->name('admin.faq.index');
        Route::post('faq/search', [FaqController::class, 'search'])->name('admin.faq.search');
        Route::delete('faq/delete', [FaqController::class, 'delete'])->name('admin.faq.delete');
    });
});
