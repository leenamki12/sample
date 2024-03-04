<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/faqs', function () {

    return Inertia::render('faqs/Home');
})->name('faqs');