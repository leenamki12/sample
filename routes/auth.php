<?php

use App\Http\Controllers\Web\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//관리자
Route::middleware('guest')
    ->prefix('admin')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('admin/Home', [
            'layout' => 'admin',
        ]);
    })->name('admin');
})->name('admin');

Route::middleware('guest')->group(function () {

    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('role:admin')
    ->prefix('admin')
    ->group(function(){
        Route::get('/dashboard', function () {
            return Inertia::render('admin/pages/Dashboard');
    })->name('admin');
})->name('admin');