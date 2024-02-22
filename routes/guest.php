<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return Inertia::render('home/Home');
})->name('home');

Route::middleware('guest')
    ->prefix('admin')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('admin/Home', [
            'layout' => 'admin',
        ]);
    })->name('admin');
})->name('admin');


foreach (glob(__DIR__ . '/guest/*.php') as $file) {
    require $file;
}