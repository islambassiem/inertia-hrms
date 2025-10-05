<?php

declare(strict_types=1);

namespace App\Enums;

enum PositionType: string
{
    case GENERIC = '0';
    case ENTITY = '1';
    case MOI = '2';
    case HRSD = '3';
    case GOSI = '4';

    /**
     * @return array<string>
     */
    public static function toArray(): array
    {
        $array = [];
        foreach (self::cases() as $case) {
            $array[] = $case->value;
        }

        return $array;
    }

    /**
     * @return array<string, string>
     */
    public function label(): array
    {
        return match ($this) {
            self::GENERIC => ['id' => '0', 'position_type_en' => 'Generic', 'position_type_ar' => 'عام'],
            self::ENTITY => ['id' => '1', 'position_type_en' => 'Entity', 'position_type_ar' => 'الكيان'],
            self::MOI => ['id' => '2', 'position_type_en' => 'MOI', 'position_type_ar' => 'مقيم'],
            self::HRSD => ['id' => '3', 'position_type_en' => 'HRSD', 'position_type_ar' => 'وزرة الموارد البشرية'],
            self::GOSI => ['id' => '4', 'position_type_en' => 'GOSI', 'position_type_ar' => 'التامينات'],
        };
    }
}
