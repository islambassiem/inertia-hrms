<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Model;

final class CollegeEmployee extends Model
{
    use TracksUser;

    protected $table = 'college_employee';

    protected $fillable = [
        'college_id',
        'employee_id',
        'start_date',
        'end_date',
        'created_by',
        'updated_by',
    ];
}
