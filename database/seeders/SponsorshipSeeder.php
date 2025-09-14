<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Sponsorship;
use Illuminate\Database\Seeder;

final class SponsorshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sponsorship::create([
            'code' => 'INY',
            'sponsorship_en' => 'Inaya Medical Colleges',
            'sponsorship_ar' => 'الكليات الطبية العينة',
            'created_by' => 1,
        ]);

        Sponsorship::create([
            'code' => 'SHDC',
            'sponsorship_en' => 'Shining Horizons Dental Center',
            'sponsorship_ar' => 'مجمع الآفاق لطب الأسنان',
            'created_by' => 1,
        ]);

        Sponsorship::create([
            'code' => 'INY-CLN',
            'sponsorship_en' => 'Inaya Cleaning',
            'sponsorship_ar' => 'العناية للنظافة',
            'created_by' => 1,
        ]);
    }
}
