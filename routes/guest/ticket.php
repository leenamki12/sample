<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/ticket', function () {

    return Inertia::render('ticket/Home');
})->name('ticket');