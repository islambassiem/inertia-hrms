<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\SalaryResource;
use App\Models\Employee;

final class SalaryController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'salaries',
        ]);

        return inertia('Hr/Employee/Salary', [
            'employee' => new EmployeeResource($employee),
            'salaries' => SalaryResource::collection($employee->salaries),
        ]);
    }
}
