<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Hr\StoreIdentificationAction;
use App\Actions\Hr\UpdateIdentificatonAction;
use App\Data\IdentificationData;
use App\Http\Requests\StoreIdentificationRequest;
use App\Http\Requests\UpdateIdentificationRequest;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\IdentificationResource;
use App\Models\Employee;
use App\Models\Identification;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

final class IdentificationController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load(['positions', 'departments']);

        return Inertia::render('Hr/Employee/Show/Identification', [
            'employee' => new EmployeeResource($employee),
            'identification' => $employee->nationalId ? new IdentificationResource($employee->nationalId) : null,
        ]);
    }

    public function edit(Employee $employee): \Inertia\Response
    {
        $employee->load(['positions', 'departments']);

        return Inertia::render('Hr/Employee/Edit/Identification', [
            'employee' => new EmployeeResource($employee),
            'identification' => $employee->nationalId ? new IdentificationResource($employee->nationalId) : null,
        ]);
    }

    public function update(
        Employee $employee,
        Identification $identification,
        UpdateIdentificationRequest $request,
        UpdateIdentificatonAction $action
    ): RedirectResponse {
        $data = IdentificationData::from($request->validated());
        $action->handle($identification, $data);

        return redirect()->route('hr.employees.identification.index', [
            'employee' => new EmployeeResource($employee),
        ]);
    }

    public function store(
        Employee $employee,
        StoreIdentificationRequest $request,
        StoreIdentificationAction $action
    ): RedirectResponse {
        $data = IdentificationData::from($request->validated());
        $action->handle($data);

        return redirect()->route('hr.employees.identification.index', [
            'employee' => new EmployeeResource($employee),
        ]);
    }
}
