<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Inertia\Inertia;

final class OfficialController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'categories',
            'entities',
            'colleges',
            'positions',
        ]);

        return Inertia::render('Hr/Employee/Official', [
            'employee' => new EmployeeResource($employee),
        ]);
    }
}
