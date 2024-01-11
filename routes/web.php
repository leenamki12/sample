<?php

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\Models\Performance;
use App\Domains\Admin\WorkType\Models\WorkType;
use App\Http\Controllers\Web\Admin\PartTypeController;
use App\Http\Controllers\Web\Admin\PerformanceController;
use App\Http\Controllers\Web\Admin\SettingController;
use App\Http\Controllers\Web\Admin\WorkTypeController;
use App\Http\Controllers\Web\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Web\Auth\PasswordController;
use App\Http\Controllers\Web\Home\HomeController;
use App\Http\Controllers\Web\Works\WorksController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Home 첫번째 화면
Route::get('/', [HomeController::class, 'index'])->name('home');

//about
Route::get('/about', function () {
    return Inertia::render('about/About');
})->name('about');

//presents
Route::get('/presents', function () {
    return Inertia::render('presents/Presents');
})->name('presents');

//works
Route::prefix('works')->group(function () {
    Route::get('/', [WorksController::class, 'index'])->name('works');
    Route::get('/load', [WorksController::class, 'load'])->name('works.load');
});

//contact
Route::get('/contact', function () {
    return Inertia::render('contact/Contact');
})->name('contact');


Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {

    Route::get('/performance', [PerformanceController::class, 'index'])->name('admin.performance');
    Route::get('/performance/create', [PerformanceController::class, 'create'])->name('admin.performance.create');
    Route::post('/performance/create', [PerformanceController::class, 'store'])->name('admin.performance.store');
    Route::get('/performance/edit/{id}', [PerformanceController::class, 'edit'])->name('admin.performance.edit');
    Route::post('/performance/update/{id}', [PerformanceController::class, 'update'])->name('admin.performance.update');
    Route::delete('/performance', [PerformanceController::class, 'destroy'])->name('admin.performance.delete');

    Route::get('/part', [PartTypeController::class, 'index'])->name('admin.part');
    Route::post('/part', [PartTypeController::class, 'store'])->name('admin.part.create');
    Route::patch('/part/{id}', [PartTypeController::class, 'update'])->name('admin.part.update');
    Route::delete('/part', [PartTypeController::class, 'destroy'])->name('admin.part.delete');

    Route::get('/work', [WorkTypeController::class, 'index'])->name('admin.work');
    Route::post('/work', [WorkTypeController::class, 'store'])->name('admin.work.create');
    Route::patch('/work/{id}', [WorkTypeController::class, 'update'])->name('admin.work.update');
    Route::delete('/work', [WorkTypeController::class, 'destroy'])->name('admin.work.delete');

    Route::get('/setting', [SettingController::class, 'index'])->name('admin.setting');

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

require __DIR__.'/auth.php';