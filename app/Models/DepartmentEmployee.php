<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Model;

final class DepartmentEmployee extends Model
{
    use TracksUser;

    protected $table = 'department_employees';

    protected $fillable = [
        'department_id',
        'employee_id',
        'created_by',
        'updated_by',
    ];
}
