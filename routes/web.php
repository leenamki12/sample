<?php

use App\Http\Controllers\Web\Admin\PartController;
use App\Http\Controllers\Web\Admin\PerformanceController;
use App\Http\Controllers\Web\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Home 첫번째 화면
Route::get('/', function () {
    return Inertia::render('home/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

//대시보드
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

//about
Route::get('/about', function () {
    return Inertia::render('about/About');
})->name('about');

//presents
Route::get('/presents', function () {
    return Inertia::render('presents/Presents');
})->name('presents');

//works
Route::get('/works', function () {
    return Inertia::render('works/Works');
})->name('works');

//contact
Route::get('/contact', function () {
    return Inertia::render('contact/Contact');
})->name('contact');


Route::middleware('auth','role:admin')->prefix('admin')->group(function () {

    Route::get('/performance', [PerformanceController::class, 'index'])->name('admin.performance');
    Route::get('/performance/create', [PerformanceController::class, 'create'])->name('admin.performance.create');
    Route::post('/performance/create', [PerformanceController::class, 'store'])->name('admin.performance.store');
    Route::get('/performance/edit/{id}', [PerformanceController::class, 'edit'])->name('admin.performance.edit');

    Route::get('/part', [PartController::class, 'index'])->name('admin.part');
    Route::post('/part', [PartController::class, 'store'])->name('admin.part.create');
    Route::patch('/part', [PartController::class, 'update'])->name('admin.part.update');
    Route::delete('/part', [PartController::class, 'destroy'])->name('admin.part.delete');

    Route::get('/work', function () {
        return Inertia::render('admin/pages/work/WorkList');
    })->name('admin.work');
});

require __DIR__.'/auth.php';