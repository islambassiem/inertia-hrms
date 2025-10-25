<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\BankResource;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Inertia\Inertia;

final class BankController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load(['positions', 'departments']);

        return Inertia::render('Hr/Employee/Show/Bank', [
            'employee' => new EmployeeResource($employee),
            'bank' => $employee->bank ? new BankResource($employee->bank) : null,
        ]);
    }
}
