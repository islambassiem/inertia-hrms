<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
final class AddressFactory extends Factory
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
            'building_number' => fake()->buildingNumber(),
            'street' => fake()->streetName(),
            'district' => fake()->city(),
            'city' => fake()->city(),
            'postal_code' => fake()->postcode(),
            'secondary_number' => fake()->secondaryAddress(),
            'short_address' => fake()->word(),
        ];
    }
}
