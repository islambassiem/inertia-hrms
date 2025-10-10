<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Course
 */
final class CourseResource extends JsonResource
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
            'name' => $this->name,
            'type' => new CourseTypeResource($this->type),
            'issuer' => $this->issuer,
            'date_of_issue' => $this->date_of_issue,
            'period' => $this->period,
            'city' => $this->city,
            'country' => new CountryResource($this->whenLoaded('country')),
        ];
    }
}
