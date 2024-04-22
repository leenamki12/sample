<?php

use App\Http\Web\Client\GalleryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('gallery')->group(function () {
    Route::get('/', [GalleryController::class, 'index'])->name('gallery');
});