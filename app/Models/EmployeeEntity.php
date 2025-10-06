<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Model;

final class EmployeeEntity extends Model
{
    use TracksUser;

    protected $table = 'employee_entity';

    protected $fillable = [
        'employee_id',
        'entity_id',
        'start_date',
        'end_date',
        'created_by',
        'updated_by',
    ];
}
