<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Http\Resources\NationalAddressResource;
use App\Models\Employee;
use Inertia\Inertia;

final class NationalddressController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load(['positions', 'departments']);

        return Inertia::render('Hr/Employee/Show/NationalAddress', [
            'employee' => new EmployeeResource($employee),
            'nationalAddress' => $employee->address ? new NationalAddressResource($employee->address) : null,
        ]);
    }
}
