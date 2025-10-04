<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Address;
use Illuminate\Database\Seeder;

final class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Address::factory(20)->create();
    }
}
