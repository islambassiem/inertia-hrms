<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\User
 */
final class AuthUser extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $employee = $this->whenLoaded('employee');
        return [
            'user_id' => $this->id,
            'email' => $this->email,
            'employee_id' => optional($employee)->id,
            'empid' => optional($employee)->code,
            'name_en' => optional($employee)->english_name,
            'name_ar' => optional($employee)->arabic_name,
            'roles' => $this->roles->pluck('name'),
            'permissions' => $this->permissions->pluck('name'),
        ];
    }
}
