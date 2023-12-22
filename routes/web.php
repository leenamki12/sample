<?php
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

//회원정보
Route::middleware('auth:web')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'delete'])->name('profile.delete');
    Route::post('/profile', [ProfileController::class, 'photoUpdate'])->name('profile.photoUpdate');
})->name('profile');

require __DIR__.'/auth.php';
