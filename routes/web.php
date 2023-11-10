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

//기업코드 변경
Route::middleware('auth:web')->group(function () {
    Route::patch('/codeUpdate', [CompanyCodeController::class, 'update'])->name('companyCode.update');
})->name('companyCode');

//서비스 소개 페이지
Route::get('/service', function () {
    $auth = Auth::check();
    $isLoggedIn = $auth || Auth::guard('company')->check();

    return Inertia::render('public/service/pages/Service', [
        'isLoggedIn' => $isLoggedIn,
    ]);
})->name('service');

//관리자
Route::middleware(['role:admin'])
    ->prefix('admin')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('admin/pages/Dashboard');
        })->name('admin');

        Route::get('/hospital', function () {
            return Inertia::render('admin/pages/Dashboard');
        })->name('admin.hospital');

        Route::get('/company', function () {
            return Inertia::render('admin/pages/company/Dashboard');
        })->name('admin.company');

        Route::get('/company/list', [CompanyListController::class, 'index'])->name('admin.company.list');

})->name('admin');

//기업
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

//병원
Route::middleware(['auth:web', 'role:hospital'])
    ->prefix('hospital')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('hospital/pages/Dashboard');
        })->name('hospital');
})->name('hospital');

require __DIR__.'/auth.php';