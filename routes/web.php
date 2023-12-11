<?php

use App\Http\Controllers\Web\Admin\CompanyListController;
use App\Http\Controllers\Web\Profile\CompanyCodeController;
use App\Http\Controllers\Web\Hospital\ReservationController;
use App\Http\Controllers\Web\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Home 첫번째 화면
Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

//대시보드
Route::get('/dashboard', function () {
    $auth = Auth::getUser();

    if(!$auth && Auth::guard('company')->user()){
        return redirect(Auth::guard('company')->user()->roles->first()->name);
    }

    return redirect($auth->roles->first()->name);
})->name('dashboard');

//회원정보
Route::middleware('auth:web')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'delete'])->name('profile.delete');
    Route::post('/profile', [ProfileController::class, 'photoUpdate'])->name('profile.photoUpdate');
})->name('profile');

require __DIR__.'/auth.php';