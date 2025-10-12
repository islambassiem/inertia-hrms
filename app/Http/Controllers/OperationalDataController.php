<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Inertia\Inertia;

final class OperationalDataController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'positions',
            'departments',
        ]);

        return Inertia::render('Hr/Employee/OperationalData', [
            'employee' => new EmployeeResource($employee),
        ]);
    }
}
