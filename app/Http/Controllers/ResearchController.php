<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Http\Resources\ResearchResource;
use App\Models\Employee;

final class ResearchController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'researches',
        ]);

        return inertia('Hr/Employee/Show/Research', [
            'employee' => new EmployeeResource($employee),
            'researches' => ResearchResource::collection($employee->researches),
        ]);
    }
}
