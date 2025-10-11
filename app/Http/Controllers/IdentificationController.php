<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Http\Resources\IdentificationResource;
use App\Models\Employee;
use Inertia\Inertia;

final class IdentificationController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        return Inertia::render('Hr/Employee/Identification', [
            'employee' => new EmployeeResource($employee),
            'identification' => $employee->nationalId ? new IdentificationResource($employee->nationalId) : null,
        ]);
    }
}
