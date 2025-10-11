<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\BankResource;
use App\Http\Resources\EmployeeResource;
use App\Models\Bank;
use App\Models\Employee;
use Inertia\Inertia;

final class BankController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        // $employee->load([
        //     'bank',
        // ]);
        return Inertia::render('Hr/Employee/Bank', [
            'employee' => new EmployeeResource($employee),
            'passport' => $employee->bank ? new BankResource($employee->bank) : null,
        ]);
    }
}
