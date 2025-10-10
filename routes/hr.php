<?php

declare(strict_types=1);

use App\Http\Controllers\Hr\Employee\AcademicExperienceController;
use App\Http\Controllers\Hr\Employee\AchievementController;
use App\Http\Controllers\Hr\Employee\CourseController;
use App\Http\Controllers\Hr\Employee\ExperienceController;
use App\Http\Controllers\Hr\Employee\QualificationConroller;
use App\Http\Controllers\Hr\Employee\ResearchController;
use App\Http\Controllers\Hr\Employee\SalaryController;
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

        Route::get('/', [EmployeeController::class, 'index'])
            ->name('index');

        Route::post('/export', [EmployeeController::class, 'export'])
            ->name('export');

        Route::get('/{employee}/info', [EmployeeController::class, 'show'])
            ->name('show');

        Route::get('/{employee}/official', [EmployeeController::class, 'official'])
            ->name('official');

        Route::get('/{employee}/qualifications', [QualificationConroller::class, 'index'])
            ->name('qualifications.index');

        Route::get('/{employee}/academic-experiences', [AcademicExperienceController::class, 'index'])
            ->name('academic-experiences.index');

        Route::get('/{employee}/experiences', [ExperienceController::class, 'index'])
            ->name('experiences.index');

        Route::get('/{employee}/salaries', [SalaryController::class, 'index'])
            ->name('salary.index');

        Route::get('/{employee}/achievements', [AchievementController::class, 'index'])
            ->name('achievements.index');

        Route::get('/{employee}/researches', [ResearchController::class, 'index'])
            ->name('researches.index');

        Route::get('/{employee}/courses', [CourseController::class, 'index'])
            ->name('courses.index');

        Route::get('/{employee}/edit/info', [EmployeeController::class, 'infoEdit'])
            ->name('edit.info');
    });
});
