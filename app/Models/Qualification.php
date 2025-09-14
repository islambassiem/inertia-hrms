<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\GPAType;
use App\Enums\Qualification as QualificationEnum;
use App\Enums\Rating;
use App\Enums\StudyNature;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Qualification extends Model
{
    /** @use HasFactory<\Database\Factories\QualificationFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'qualification',
        'thesis',
        'major_id',
        'minor_id',
        'rating',
        'gpa',
        'gpa_type',
        'graduation_university',
        'graduation_college',
        'graduation_date',
        'city',
        'graduation_country',
        'study_nature',
        'is_attested',
        'is_active',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'qualification' => QualificationEnum::class,
            'rating' => Rating::class,
            'gpa_type' => GPAType::class,
            'graduation_date' => 'date',
            'study_nature' => StudyNature::class,
            'is_attested' => 'boolean',
            'is_active' => 'boolean',
        ];
    }
}
