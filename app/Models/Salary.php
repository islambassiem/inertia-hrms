<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Salary extends Model
{
    /** @use HasFactory<\Database\Factories\SalaryFactory> */
    use HasFactory;

    use TracksUser;

    protected $fillable = [
        'employee_id',
        'basic',
        'housing',
        'transportation',
        'food',
        'effective',
        'created_by',
        'updated_by',
    ];
}
