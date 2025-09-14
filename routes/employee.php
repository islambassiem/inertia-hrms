<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['auth'],
], function () {
    Route::get('/dashboard', function () {
        return inertia('Employee/Dashboard');
    })->name('dashboard');
});
