<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Qualification;
use Illuminate\Database\Seeder;

final class QualificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Qualification::factory()->count(20)->create();
    }
}
