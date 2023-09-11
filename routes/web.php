<?php

use App\Http\Controllers\Web\Hospital\ReservationController;
use App\Http\Controllers\Web\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Home 첫번째 화면
Route::get('/', function () {
    $auth = Auth::getUser();

    if(!$auth && Auth::guard('company')->user()){
        return redirect(Auth::guard('company')->user()->roles->first()->name);
    }
    return $auth ? redirect($auth->roles->first()->name) : Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    $auth = Auth::getUser();

    if(!$auth && Auth::guard('company')->user()){
        return redirect(Auth::guard('company')->user()->roles->first()->name);
    }

    return redirect($auth->roles->first()->name);
})->name('dashboard');

Route::middleware('auth:web')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->name('profile');

Route::get('/service', function () {
    $auth = Auth::check();
    $isLoggedIn = $auth || Auth::guard('company')->check();

    return Inertia::render('public/service/pages/Service', [
        'isLoggedIn' => $isLoggedIn,
    ]);
})->name('service');

Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('admin/pages/Dashboard');
        })->name('admin');
})->name('admin');

Route::middleware(['auth:web,company', 'role:company'])
    ->prefix('company')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('company/pages/Dashboard');
        })->name('company');

        Route::get('/detail/{id}', function ($id) {
            return Inertia::render('company/pages/hospital-detail/HospitalDetail', compact('id'));
        })->name('company.detail');

        Route::post('/reservations/store', [ReservationController::class, 'store'])->name('reservations.store');
})->name('company');

Route::middleware(['auth:web', 'role:hospital'])
    ->prefix('hospital')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('hospital/pages/Dashboard');
        })->name('hospital');
})->name('hospital');

require __DIR__.'/auth.php';
