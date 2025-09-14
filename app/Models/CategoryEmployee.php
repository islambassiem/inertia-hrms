<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Model;

final class CategoryEmployee extends Model
{
    use TracksUser;

    protected $table = 'category_employee';

    protected $fillable = [
        'category_id',
        'employee_id',
        'created_by',
        'updated_by',
    ];
}
