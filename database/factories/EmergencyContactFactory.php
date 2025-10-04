<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\FamilyRelationship;
use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EmergencyContact>
 */
final class EmergencyContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => Employee::inRandomOrder()->first('id')->id,
            'name' => fake()->name(),
            'mobile' => fake()->phoneNumber(),
            'email' => fake()->email(),
            'relation' => fake()->randomElement(FamilyRelationship::toArray()),
        ];
    }
}
