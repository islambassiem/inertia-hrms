<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\ExperienceResource;
use App\Models\Employee;

final class ExperienceController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'experiences.country',
        ]);

        return inertia('Hr/Employee/Experience', [
            'employee' => new EmployeeResource($employee),
            'experiences' => ExperienceResource::collection($employee->experiences),
        ]);
    }
}
