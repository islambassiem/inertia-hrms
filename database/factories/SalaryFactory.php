<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Salary>
 */
final class SalaryFactory extends Factory
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
            'basic' => fake()->randomFloat(0, 3000, 10000),
            'housing' => fake()->randomElement([null, fake()->randomFloat(0, 500, 3000)]),
            'transportation' => fake()->randomElement([null, fake()->randomFloat(0, 500, 2000)]),
            'food' => fake()->randomElement([null, fake()->randomFloat(0, 300, 1500)]),
            'effective' => fake()->date(),
        ];
    }
}
