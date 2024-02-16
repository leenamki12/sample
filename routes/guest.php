<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return Inertia::render('home/Home');
})->name('home');

foreach (glob(__DIR__ . '/guest/*.php') as $file) {
    require $file;
}