<?php

use App\Http\Web\Admin\FaqController;
use App\Http\Web\Client\HomeController;
use Illuminate\Support\Facades\Route;


Route::prefix('/')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/home-faqs', [HomeController::class, 'search'])->name('home.faqs');
})->name('home');