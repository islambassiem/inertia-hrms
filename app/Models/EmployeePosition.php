<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Model;

final class EmployeePosition extends Model
{
    use TracksUser;

    protected $table = 'employee_position';

    protected $fillable = [
        'employee_id',
        'position_id',
        'created_by',
        'updated_by',
    ];
}
