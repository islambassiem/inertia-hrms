<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\Bank;
use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bank>
 */
final class BankFactory extends Factory
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
            'bank' => $this->faker->randomElement(Bank::toArray()),
            'account' => $this->faker->creditCardNumber,
        ];
    }
}
