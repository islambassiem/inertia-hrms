<?php

declare(strict_types=1);

use App\Http\Controllers\AcademicExperienceController;
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\OfficialController;
use App\Http\Controllers\QualificationConroller;
use App\Http\Controllers\ResearchController;
use App\Http\Controllers\SalaryController;
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

        Route::get('/', [EmployeesController::class, 'index'])
            ->name('index');

        Route::post('/export', [EmployeesController::class, 'export'])
            ->name('export');

        Route::get('/{employee}/info', [EmployeesController::class, 'show'])
            ->name('show');

        Route::get('/{employee}/official', [OfficialController::class, 'index'])
            ->name('official.index');

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

        Route::get('/{employee}/edit/info', [EmployeesController::class, 'infoEdit'])
            ->name('edit.info');
    });
});
