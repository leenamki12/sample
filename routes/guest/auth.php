<?php

use App\Http\Web\Admin\Auth\Controllers\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('login');
});
