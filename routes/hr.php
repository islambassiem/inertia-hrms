<?php

declare(strict_types=1);

use App\Http\Controllers\Hr\Employee\EmployeeAcademicExperienceController;
use App\Http\Controllers\Hr\Employee\EmployeeQualificationConroller;
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

    Route::group([
        'prefix' => 'employees',
        'as' => 'employees.',
    ], function () {
        Route::get('/', [EmployeeController::class, 'index'])->name('index');
        Route::post('/export', [EmployeeController::class, 'export'])->name('export');

        Route::get('/{employee}/info', [EmployeeController::class, 'show'])->name('show');
        Route::get('/{employee}/official', [EmployeeController::class, 'official'])->name('official');

        Route::get('/{employee}/qualifications', [EmployeeQualificationConroller::class, 'index'])->name('qualifications.index');

        Route::get('/{employee}/academic-experiences', [EmployeeAcademicExperienceController::class, 'index'])
            ->name('academic-experiences.index');

        Route::get('/{employee}/edit/info', [EmployeeController::class, 'infoEdit'])->name('edit.info');
    });
});
