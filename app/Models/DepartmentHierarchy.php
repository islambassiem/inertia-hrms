<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class DepartmentHierarchy extends Model
{
    /** @use HasFactory<\Database\Factories\DepartmentHierarchyFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'branch_id',
        'college_id',
        'department_id',
        'entity_id',
        'created_by',
        'updated_by',
    ];
}
