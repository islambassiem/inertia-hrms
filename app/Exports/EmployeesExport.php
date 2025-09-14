<?php

declare(strict_types=1);

namespace App\Exports;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

// @phpstan-ignore missingType.generics
final class EmployeesExport implements FromCollection, WithHeadings, WithMapping
{
    use Exportable;

    /**
     * @param  Collection<int, Employee>  $employeesData
     */
    public function __construct(public Collection $employeesData) {}

    /**
     * @return Collection<int, Employee>
     */
    public function collection(): Collection
    {
        return $this->employeesData;
    }

    /**
     * @return array<int, string>
     */
    public function headings(): array
    {
        return [
            'id',
            'empid',
            'name',
            'gender',
            'iqama',
        ];
    }

    /**
     * @return array<int, mixed>
     */
    public function map(mixed $user): array
    {
        return [
            $user->id,
            $user->code,
            $user->englishName,
            $user->gender->label()['name'],
            $user->nationalId?->id_number,
        ];
    }
}
