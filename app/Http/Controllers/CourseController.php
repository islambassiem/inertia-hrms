<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

final class CourseController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'courses.country',
        ]);

        return inertia('Hr/Employee/Show/Course', [
            'employee' => new EmployeeResource($employee),
            'courses' => CourseResource::collection($employee->courses),
        ]);
    }
}
