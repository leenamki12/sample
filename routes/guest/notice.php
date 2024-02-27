<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/notice', function () {

    return Inertia::render('notice/Home');
})->name('notice');