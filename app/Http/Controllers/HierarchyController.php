<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Inertia\Inertia;

final class HierarchyController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load(['entities', 'departments', 'colleges', 'head', 'positions', 'categories']);

        return Inertia::render('Hr/Employee/Show/Hierarchy', [
            'employee' => new EmployeeResource($employee),
        ]);
    }
}
