<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Model;

final class EmployeeExtention extends Model
{
    use TracksUser;

    protected $table = 'employee_extention';

    protected $fillable = [
        'employee_id',
        'extention_id',
        'created_by',
        'updated_by',
    ];
}
