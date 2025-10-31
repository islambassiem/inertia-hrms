<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Hr\UpdateBasicInfoAction;
use App\Data\BasicInfoData;
use App\Enums\Gender;
use App\Enums\MaritalStatus;
use App\Http\Requests\Hr\UpdateBasicInfoRequest;
use App\Http\Resources\CountryResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\GenderResource;
use App\Http\Resources\MaritalStatusResource;
use App\Models\Country;
use App\Models\Employee;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

final class BasicInfoController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'positions',
            'departments',
            'nationality',
            'email',
            'mobile',
            'phone',
        ]);

        return Inertia::render('Hr/Employee/Show/Info', [
            'employee' => new EmployeeResource($employee),
        ]);
    }

    public function edit(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'positions',
            'departments',
            'nationality',
            'email',
            'mobile',
            'phone',
        ]);

        return Inertia::render('Hr/Employee/Edit/Info', [
            'employee' => new EmployeeResource($employee),
            'countries' => CountryResource::collection(Country::all()),
            'genders' => GenderResource::collection(Gender::cases()),
            'maritalStatus' => MaritalStatusResource::collection(MaritalStatus::cases()),
        ]);
    }

    public function update(UpdateBasicInfoRequest $request, UpdateBasicInfoAction $action): RedirectResponse
    {
        $dto = BasicInfoData::fromArray($request->validated());
        $action->handle(Employee::find($dto->employee_id), $dto);

        return redirect()->route('hr.employees.info.basic.index', [
            'employee' => new EmployeeResource(Employee::find($dto->employee_id)),
        ]);
    }
}
