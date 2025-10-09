<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Country;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Experience>
 */
final class ExperienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => Employee::inRandomOrder()->first()->id,
            'profession' => fake()->jobTitle(),
            'organization_name' => fake()->company(),
            'city' => fake()->city(),
            'country_id' => Country::inRandomOrder()->first()->id,
            'department' => fake()->word(),
            'section' => fake()->word(),
            'start_date' => fake()->date(),
            'end_date' => fake()->date(),
            'functional_tasks' => fake()->paragraph(),
            'created_by' => User::inRandomOrder()->first()->id,
            'updated_by' => User::inRandomOrder()->first()->id,
        ];
    }
}
