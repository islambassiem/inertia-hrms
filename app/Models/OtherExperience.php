<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class OtherExperience extends Model
{
    /** @use HasFactory<\Database\Factories\OtherExperienceFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'profession',
        'organization_name',
        'city',
        'country_id',
        'department',
        'section',
        'start_date',
        'end_date',
        'functional_tasks',
        'functional_tasks',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
        ];
    }
}
