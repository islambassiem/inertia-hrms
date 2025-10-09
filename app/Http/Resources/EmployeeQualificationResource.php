<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Qualification
 */
final class EmployeeQualificationResource extends JsonResource
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
            'qualification' => QualificationResource::make($this->qualification),
            'thesis' => $this->thesis,
            'major' => SpecialtyResource::make($this->whenLoaded('major')),
            'minor' => SpecialtyResource::make($this->whenLoaded('minor')),
            'rating' => RatingResource::make($this->rating),
            'gpa' => $this->gpa,
            'gpa_type' => GpaTypeResource::make($this->gpa_type),
            'graduation_university' => $this->graduation_university,
            'graduation_college' => $this->graduation_college,
            'graduation_date' => $this->graduation_date,
            'city' => $this->city,
            'graduation_country' => $this->graduation_country,
            'study_nature' => StudyNatureResource::make($this->study_nature),
            'is_attested' => $this->is_attested,
            'is_active' => $this->is_active,
        ];
    }
}
