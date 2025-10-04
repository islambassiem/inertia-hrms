<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\ContactType;
use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
final class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $employee = Employee::inRandomOrder()->first('id')->id;
        $type = $this->faker->randomElement(ContactType::toArray());

        return [
            'type' => $type,
            'value' => $type === ContactType::PHONE->value ? $this->faker->phoneNumber() : $this->faker->email(),
            'employee_id' => $employee,
        ];
    }
}
