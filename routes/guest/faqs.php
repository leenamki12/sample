<?php

use App\Http\Web\Client\FaqController;
use Illuminate\Support\Facades\Route;


Route::prefix('faqs')->group(function () {
    Route::get('/', [FaqController::class, 'index'])->name('faqs');
});
