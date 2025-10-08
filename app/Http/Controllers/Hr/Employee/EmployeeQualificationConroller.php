<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

final class EmployeeQualificationConroller extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load('qualifications.major', 'qualifications.minor');

        return inertia('Hr/Employee/Qualifications', [
            'employee' => new EmployeeResource($employee),
        ]);
    }
}
