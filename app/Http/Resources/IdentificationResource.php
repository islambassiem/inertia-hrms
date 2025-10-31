<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Identification
 */
final class IdentificationResource extends JsonResource
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
            'employee_id' => $this->employee_id,
            'id_number' => $this->id_number,
            'place_of_issue' => $this->place_of_issue,
            'date_of_issue' => $this->date_of_issue,
            'date_of_expiry' => $this->date_of_expiry,
        ];
    }
}
