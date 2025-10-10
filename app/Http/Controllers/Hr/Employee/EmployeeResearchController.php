<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

final class EmployeeResearchController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'researches',
        ]);

        return inertia('Hr/Employee/Research', [
            'employee' => new EmployeeResource($employee),
        ]);
    }
}
