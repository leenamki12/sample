<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/map', function () {

    return Inertia::render('map/Home');
})->name('map');