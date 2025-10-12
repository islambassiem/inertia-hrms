<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Http\Resources\IdentificationResource;
use App\Models\Employee;
use Inertia\Inertia;

final class PassportController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load(['positions', 'departments']);

        return Inertia::render('Hr/Employee/Passport', [
            'employee' => new EmployeeResource($employee),
            'passport' => $employee->passport ? new IdentificationResource($employee->passport) : null,
        ]);
    }
}
