<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Department extends Model
{
    /** @use HasFactory<\Database\Factories\DepartmentFactory> */
    use HasFactory, TracksUser;

    protected $table = '_departments';

    protected $fillable = [
        'code',
        'department_en',
        'department_ar',
        'employee_id',
        'entity_id',
        'college_id',
    ];
}
