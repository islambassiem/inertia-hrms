<?php

declare(strict_types=1);

namespace App\Http\Controllers\Hr;

use App\Dtos\EmployeeFilterDto;
use App\Enums\Gender;
use App\Enums\JobStatus;
use App\Enums\MaritalStatus;
use App\Enums\Qualification;
use App\Exports\EmployeesExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryListResource;
use App\Http\Resources\CollegeListResource;
use App\Http\Resources\CountryListResource;
use App\Http\Resources\DepartmentListResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\EntityListResource;
use App\Http\Resources\GenderListResource;
use App\Http\Resources\JobStatusListResource;
use App\Http\Resources\MaritalStatusListResource;
use App\Http\Resources\QualificationListResource;
use App\Http\Resources\SponsorshipListResource;
use App\Models\Category;
use App\Models\College;
use App\Models\Country;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Entity;
use App\Models\Sponsorship;
use App\Queries\Hr\EmployeeListQuery;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

final class EmployeeController extends Controller
{
    public function index(EmployeeListQuery $query, Request $request): \Inertia\Response
    {
        $employees = $this->filter($query, $request)
            ->paginate($request->input('perPage') ?? 10)
            ->withQueryString()
            ->onEachSide(1);

        return Inertia::render('Hr/Employees', [
            'status' => JobStatusListResource::collection(JobStatus::cases()),
            'genders' => GenderListResource::collection(Gender::cases()),
            'employees' => EmployeeResource::collection($employees),
            'departments' => DepartmentListResource::collection(Department::all()),
            'categories' => CategoryListResource::collection(Category::all()),
            'countries' => CountryListResource::collection(Country::all()),
            'sponsorships' => SponsorshipListResource::collection(Sponsorship::all()),
            'qualifications' => QualificationListResource::collection(Qualification::cases()),
            'entities' => EntityListResource::collection(Entity::all()),
            'colleges' => CollegeListResource::collection(College::all()),
        ]);
    }

    public function export(Request $request, EmployeeListQuery $query): BinaryFileResponse|Response
    {
        $employees = $this->filter($query, $request);

        return (new EmployeesExport($employees->get()))->download('employees.xlsx');
    }

    public function show(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'phone',
            'email',
            'mobile',
            'nationalId',
            'passport',
            'bank',
            'address',
            'contacts',
            'entities',
        ]);

        return Inertia::render('Hr/Employee/Info', [
            'employee' => new EmployeeResource($employee),
        ]);
    }

    public function official(Employee $employee): \Inertia\Response
    {
        $employee->load([
            'departments',
            'positions',
            'phone',
            'email',
            'mobile',
            'nationalId',
            'passport',
            'bank',
            'address',
            'contacts',
            'entities',
            'categories',
            'colleges',
        ]);

        return Inertia::render('Hr/Employee/Official', [
            'employee' => new EmployeeResource($employee),
        ]);
    }

    public function infoEdit(Employee $employee): \Inertia\Response
    {
        $employee->load(['departments', 'positions']);

        return Inertia::render('Hr/Employee/EditInfo', [
            'employee' => new EmployeeResource($employee),
            'name' => [
                'first_name_ar' => $employee->first_name_ar,
                'middle_name_ar' => $employee->middle_name_ar,
                'third_name_ar' => $employee->third_name_ar,
                'family_name_ar' => $employee->family_name_ar,
                'first_name_en' => $employee->first_name_en,
                'middle_name_en' => $employee->middle_name_en,
                'third_name_en' => $employee->third_name_en,
                'family_name_en' => $employee->family_name_en,
            ],
            'genders' => GenderListResource::collection(Gender::cases()),
            'maritalStatus' => MaritalStatusListResource::collection(MaritalStatus::cases()),
        ]);
    }

    /**
     * @return Builder<Employee>
     */
    private function filter(EmployeeListQuery $query, Request $request): Builder
    {
        $builder = $query->handle(
            new EmployeeFilterDto(
                $request->input('search'),
                $request->input('gender', []),
                $request->input('status', []),
                $request->input('identificaiton'),
                $request->input('passport'),
                $request->input('departments', []),
                $request->input('categories', []),
                $request->input('countries', []),
                $request->input('sponsorships', []),
                $request->input('qualifications', []),
                $request->input('entities', []),
                $request->input('colleges', []),
                $request->input('active_from'),
                $request->input('active_to'),
                $request->input('joining_date_from'),
                $request->input('joining_date_to'),
                $request->input('resignation_date_from'),
                $request->input('resignation_date_to'),
            )
        );

        return $builder;
    }
}
