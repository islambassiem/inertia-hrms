<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Experience
 */
final class ExperienceResource extends JsonResource
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
            'profession' => $this->profession,
            'organization_name' => $this->organization_name,
            'city' => $this->city,
            'country' => new CountryResource($this->whenLoaded('country')),
            'department' => $this->department,
            'section' => $this->section,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'functional_tasks' => $this->functional_tasks,
        ];
    }
}
