<?php

declare(strict_types=1);

use App\Http\Controllers\Hr\EmployeeController;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['auth', 'IsHr'],
    'prefix' => 'hr',
    'as' => 'hr.',
], function () {
    Route::get('/dashboard', function () {
        return inertia('Hr/Dashboard');
    })->name('dashboard');

    Route::get('/employees', [EmployeeController::class, 'index'])->name('employees');
    Route::post('/employees/export', [EmployeeController::class, 'export'])->name('employees.export');

    Route::get('/employees/{employee}/info', [EmployeeController::class, 'show'])->name('employees.show');
    Route::get('/employees/{employee}/official', [EmployeeController::class, 'official'])->name('employees.official');

    Route::get('/employees/{employee}/edit/info', [EmployeeController::class, 'infoEdit'])->name('employees.edit.info');

});
