<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\AcademicExperienceResource;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;

final class AcademicExperienceController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'academicExperience.institution',
        ]);

        return inertia('Hr/Employee/Show/AcademicExperience', [
            'employee' => new EmployeeResource($employee),
            'academicExperiences' => AcademicExperienceResource::collection($employee->academicExperience),
        ]);
    }
}
