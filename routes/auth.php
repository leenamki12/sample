<?php

use App\Http\Controllers\Web\Admin\PartController;
use App\Http\Controllers\Web\Admin\PerformanceController;
use App\Http\Controllers\Web\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Web\Auth\RegisteredUserController;
use App\Http\Controllers\Web\Image\ImageController;
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

Route::middleware('auth','role:admin')->prefix('admin')->group(function () {
    Route::post('/image', [ImageController::class, 'store'])->name('admin.image.store');

    Route::get('/performance', [PerformanceController::class, 'index'])->name('admin.performance');
    Route::get('/performance/create', [PerformanceController::class, 'create'])->name('admin.performance.create');

    Route::get('/part', [PartController::class, 'index'])->name('admin.part');
    Route::post('/part', [PartController::class, 'store'])->name('admin.part.create');
    Route::patch('/part', [PartController::class, 'update'])->name('admin.part.update');
    Route::delete('/part', [PartController::class, 'destroy'])->name('admin.part.delete');

    Route::get('/work', function () {
        return Inertia::render('admin/pages/work/WorkList');
    })->name('admin.work');
});