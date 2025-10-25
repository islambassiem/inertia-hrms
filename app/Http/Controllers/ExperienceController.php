<?php

declare(strict_types=1);

namespace App\Http\Controllers;

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

        return inertia('Hr/Employee/Show/Experience', [
            'employee' => new EmployeeResource($employee),
            'experiences' => ExperienceResource::collection($employee->experiences),
        ]);
    }
}
