<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Dependent;
use Illuminate\Database\Seeder;

final class DependentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dependent::factory()->count(20)->create();
    }
}
