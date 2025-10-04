<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\EmergencyContact;
use Illuminate\Database\Seeder;

final class EmergencyContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EmergencyContact::factory()->count(20)->create();
    }
}
