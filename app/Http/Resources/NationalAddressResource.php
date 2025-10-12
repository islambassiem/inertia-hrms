<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Address
 */
final class NationalAddressResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'building_number' => $this->building_number,
            'street' => $this->street,
            'district' => $this->district,
            'city' => $this->city,
            'postal_code' => $this->postal_code,
            'secondary_number' => $this->secondary_number,
            'short_address' => $this->short_address,
        ];
    }
}
