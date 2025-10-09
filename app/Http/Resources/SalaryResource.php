<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Salary
 */
final class SalaryResource extends JsonResource
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
            'basic' => $this->basic,
            'housing' => $this->housing,
            'transportation' => $this->transportation,
            'food' => $this->food,
            'package' => $this->basic + $this->housing + $this->transportation + $this->food,
            'effective' => $this->effective,
        ];
    }
}
