<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\AcademicExperience
 */
final class AcademicExperienceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'position' => $this->position,
            'institution' => new InstitutionListResource($this->whenLoaded('institution')),
            'city' => new CityResource($this->whenLoaded('city')),
            'section' => new SectionResource($this->whenLoaded(relationship: 'section')),
            'faculty' => new FacultyResource($this->whenLoaded('faculty')),
            'major' => new SpecialtyResource($this->whenLoaded(relationship: 'major')),
            'minor' => new SpecialtyResource($this->whenLoaded('minor')),
            'employment_number' => $this->employment_number,
            'academic_rank' => new AcademicRankResource($this->academic_rank),
            'professional_rank' => new ProfessionalRankResource($this->professional_rank),
            'hiring_date' => $this->hiring_date,
            'joining_date' => $this->joining_date,
            'resignation_date' => $this->resignation_date,
            'appointment_type' => new AppointmentTypeResource($this->appointment_type),
            'employment_status' => new EmploymentStatusResource($this->employment_status),
            'tasks' => $this->tasks,
            'job_nature' => new JobNatureResource($this->job_nature),
            'accommodation_status' => new AccomodationStatusResource($this->accommodation_status),
        ];
    }
}
