<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\AcademicRank;
use App\Enums\AccomodationStatus;
use App\Enums\AppointmentType;
use App\Enums\EmploymentStatus;
use App\Enums\JobNature;
use App\Enums\ProfessionalRank;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class AcademicExperience extends Model
{
    /** @use HasFactory<\Database\Factories\AcademicExperienceFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'employee_id',
        'position',
        'institution_id',
        'city_id',
        'faculty_id',
        'section_id',
        'major_id',
        'minor_id',
        'employment_number',
        'academic_rank',
        'professional_rank',
        'hiring_date',
        'joining_date',
        'resignation_date',
        'appointment_type',
        'employment_status',
        'tasks',
        'job_nature',
        'accommodation_status',
        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'academic_rank' => AcademicRank::class,
            'professional_rank' => ProfessionalRank::class,
            'hiring_date' => 'date',
            'joining_date' => 'date',
            'resignation_date' => 'date',
            'appointment_type' => AppointmentType::class,
            'employment_status' => EmploymentStatus::class,
            'job_nature' => JobNature::class,
            'accommodation_status' => AccomodationStatus::class,
        ];
    }

    /**
     * @return BelongsTo<Institution, $this>
     */
    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class);
    }

    /**
     * @return BelongsTo<City, $this>
     */
    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    /**
     * @return BelongsTo<Section, $this>
     */
    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }

    /**
     * @return BelongsTo<Faculty, $this>
     */
    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    /**
     * @return BelongsTo<Specialty, $this>
     */
    public function major(): BelongsTo
    {
        return $this->belongsTo(Specialty::class, 'major_id');
    }

    /**
     * @return BelongsTo<Specialty, $this>
     */
    public function minor(): BelongsTo
    {
        return $this->belongsTo(Specialty::class, 'minor_id');
    }
}
