<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;

final class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::create([
            'entity_id' => 1,
            'code' => 'MAIN',
            'branch_en' => 'Main Branch',
            'branch_ar' => 'الفرع الرئيسي',
            'created_by' => 1,
        ]);

        Branch::create([
            'entity_id' => 2,
            'code' => 'MAIN',
            'branch_en' => 'Main Branch',
            'branch_ar' => 'الفرع الرئيسي',
            'created_by' => 1,
        ]);

        Branch::create([
            'entity_id' => 3,
            'code' => 'MAIN',
            'branch_en' => 'Main Branch',
            'branch_ar' => 'الفرع الرئيسي',
            'created_by' => 1,
        ]);
    }
}
