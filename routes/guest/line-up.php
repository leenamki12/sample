<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/line-up', function () {

    return Inertia::render('line-up/Home');
})->name('line-up');