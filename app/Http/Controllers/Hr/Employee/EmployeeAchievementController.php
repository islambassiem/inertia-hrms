<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

final class EmployeeAchievementController extends Controller
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
        ]);
    }
}
