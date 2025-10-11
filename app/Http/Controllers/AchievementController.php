<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\AchievementResource;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

final class AchievementController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'achievements',
        ]);

        return inertia('Hr/Employee/Achievement', [
            'employee' => new EmployeeResource($employee),
            'achievements' => AchievementResource::collection($employee->achievements),
        ]);
    }
}
