<?php

use App\Domains\User\User;
use App\Http\Controllers\Web\Hospital\ReservationController;
use App\Http\Controllers\Web\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Home 첫번째 화면
Route::get('/', function () {
    $auth = Auth::getUser();
    return $auth ? to_route($auth->roles->first()->name) : Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    $auth = Auth::getUser();
    return to_route($auth->roles->first()->name);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('admin/pages/Dashboard');
        })->name('admin');
})->name('admin');

Route::middleware(['auth', 'role:company'])
    ->prefix('company')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('company/pages/Dashboard');
        })->name('company');

        Route::get('/detail/{id}', function ($id) {
            return Inertia::render('company/pages/hospital-detail/HospitalDetail', compact('id'));
        })->name('company.detail');

        Route::post('/detail/{id}', [ReservationController::class, 'store'])->name('reservations.store');
})->name('company');

Route::middleware(['auth', 'role:hospital'])
    ->prefix('hospital')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('hospital/pages/Dashboard');
        })->name('hospital');
})->name('hospital');

require __DIR__.'/auth.php';
