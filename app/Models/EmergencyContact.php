<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class EmergencyContact extends Model
{
    /** @use HasFactory<\Database\Factories\EmergencyContactFactory> */
    use HasFactory;

    use TracksUser;

    protected $fillable = [
        'employee_id',
        'name',
        'mobile',
        'email',
        'relation',
    ];
}
