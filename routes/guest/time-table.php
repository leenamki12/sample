<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/time-table', function () {

    return Inertia::render('time-table/Home');
})->name('time-table');