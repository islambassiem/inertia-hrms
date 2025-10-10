<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\CourseType;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Course extends Model
{
    /** @use HasFactory<\Database\Factories\CourseFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'name',
        'type',
        'issuer',
        'date_of_issue',
        'period',
        'city',
        'country_id',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'type' => CourseType::class,
            'date_of_issue' => 'date',
        ];
    }

    /**
     * @return BelongsTo<Country, $this>
     */
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
}
