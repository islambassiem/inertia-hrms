<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Position
 *
 * @property-read \App\Models\EmployeePosition $pivot
 */
final class PositionResource extends JsonResource
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
            'name' => app()->getLocale() === 'ar' ? $this->position_ar : $this->position_en,
            'start_date' => $this->pivot->start_date,
            'end_date' => $this->pivot->end_date,
        ];
    }
}
