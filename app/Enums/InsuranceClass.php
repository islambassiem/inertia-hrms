<?php

declare(strict_types=1);

namespace App\Enums;

enum InsuranceClass: int
{
    case VVIP = 1;
    case VIP_PLUS = 2;
    case VVIP_SINGLE_FEMALE_WITH_PARENTS = 3;
    case VIP_PLUS_SINGLE_FEMALE_WITH_PARENTS = 4;
    case VIP_SINGLE_FEMALE_WITH_PARENTS = 5;
    case A_SINGLE_FEMALE_WITH_PARENTS = 6;
    case A_PLUS = 7;
    case A_PLUS_SINGLE_FEMALE_WITH_PARENTS = 8;
    case VIP = 9;
    case A = 10;
    case B = 11;
    case VVIP_SINGLE_FEMALE_WITHOUT_MATERNITY = 12;
    case VIP_PLUS_SINGLE_FEMALE_WITHOUT_MATERNITY = 13;
    case VIP_SINGLE_FEMALE_WITHOUT_MATERNITY = 14;
    case A_SINGLE_FEMALE_WITHOUT_MATERNITY = 15;
    case B_SINGLE_FEMALE_WITHOUT_MATERNITY = 16;

    /**
     * @return array<int>
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
     * @return array<string, string|int>
     */
    public function label(): array
    {
        return match ($this) {
            self::VVIP => ['id' => 1, 'name' => 'VVIP'],
            self::VIP_PLUS => ['id' => 2, 'name' => 'VIP+'],
            self::VVIP_SINGLE_FEMALE_WITH_PARENTS => ['id' => 3, 'name' => app()->getLocale() === 'en' ? 'VVIP Single Female Employee with Parents' : 'VVIP موظفة عزباء مع والديها'],
            self::VIP_PLUS_SINGLE_FEMALE_WITH_PARENTS => ['id' => 4, 'name' => app()->getLocale() === 'en' ? 'VIP+ Single Female Employee with Parents' : 'VIP+ موظفة عزباء مع والديها'],
            self::VIP_SINGLE_FEMALE_WITH_PARENTS => ['id' => 5, 'name' => app()->getLocale() === 'en' ? 'VIP Single Female Employee with Parents' : 'VIP موظفة عزباء مع والديها'],
            self::A_SINGLE_FEMALE_WITH_PARENTS => ['id' => 6, 'name' => app()->getLocale() === 'en' ? 'A Single Female Employee with Parents' : 'A موظفة عزباء مع والديها'],
            self::A_PLUS => ['id' => 7, 'name' => 'A+'],
            self::A_PLUS_SINGLE_FEMALE_WITH_PARENTS => ['id' => 8, 'name' => app()->getLocale() === 'en' ? 'A+ Single Female Employee with Parents' : 'A+ موظفة عزباء مع والديها'],
            self::VIP => ['id' => 9, 'name' => 'VIP'],
            self::A => ['id' => 10, 'name' => 'A'],
            self::B => ['id' => 11, 'name' => 'B'],
            self::VVIP_SINGLE_FEMALE_WITHOUT_MATERNITY => ['id' => 12, 'name' => app()->getLocale() === 'en' ? 'VVIP Single Female Employee without Maternity' : 'VVIP موظفة عزباء بدون أمومة'],
            self::VIP_PLUS_SINGLE_FEMALE_WITHOUT_MATERNITY => ['id' => 13, 'name' => app()->getLocale() === 'en' ? 'VIP+ Single Female Employee without Maternity' : 'VIP+ موظفة عزباء بدون أمومة'],
            self::VIP_SINGLE_FEMALE_WITHOUT_MATERNITY => ['id' => 14, 'name' => app()->getLocale() === 'en' ? 'VIP Single Female Employee without Maternity' : 'VIP موظفة عزباء بدون أمومة'],
            self::A_SINGLE_FEMALE_WITHOUT_MATERNITY => ['id' => 15, 'name' => app()->getLocale() === 'en' ? 'A Single Female Employee without Maternity' : 'A موظفة عزباء بدون أمومة'],
            self::B_SINGLE_FEMALE_WITHOUT_MATERNITY => ['id' => 16, 'name' => app()->getLocale() === 'en' ? 'B Single Female Employee without Maternity' : 'B موظفة عزباء بدون أمومة'],
        };
    }

    public function value(): string
    {
        return match ($this) {
            self::VVIP => 'VVIP',
            self::VIP_PLUS => 'VIP+',
            self::VVIP_SINGLE_FEMALE_WITH_PARENTS => app()->getLocale() === 'en' ? 'VVIP Single Female Employee with Parents' : 'VVIP موظفة عزباء مع والديها',
            self::VIP_PLUS_SINGLE_FEMALE_WITH_PARENTS => app()->getLocale() === 'en' ? 'VIP+ Single Female Employee with Parents' : 'VIP+ موظفة عزباء مع والديها',
            self::VIP_SINGLE_FEMALE_WITH_PARENTS => app()->getLocale() === 'en' ? 'VIP Single Female Employee with Parents' : 'VIP موظفة عزباء مع والديها',
            self::A_SINGLE_FEMALE_WITH_PARENTS => app()->getLocale() === 'en' ? 'A Single Female Employee with Parents' : 'A موظفة عزباء مع والديها',
            self::A_PLUS => 'A+',
            self::A_PLUS_SINGLE_FEMALE_WITH_PARENTS => app()->getLocale() === 'en' ? 'A+ Single Female Employee with Parents' : 'A+ موظفة عزباء مع والديها',
            self::VIP => 'VIP',
            self::A => 'A',
            self::B => 'B',
            self::VVIP_SINGLE_FEMALE_WITHOUT_MATERNITY => app()->getLocale() === 'en' ? 'VVIP Single Female Employee without Maternity' : 'VVIP موظفة عزباء بدون أمومة',
            self::VIP_PLUS_SINGLE_FEMALE_WITHOUT_MATERNITY => app()->getLocale() === 'en' ? 'VIP+ Single Female Employee without Maternity' : 'VIP+ موظفة عزباء بدون أمومة',
            self::VIP_SINGLE_FEMALE_WITHOUT_MATERNITY => app()->getLocale() === 'en' ? 'VIP Single Female Employee without Maternity' : 'VIP موظفة عزباء بدون أمومة',
            self::A_SINGLE_FEMALE_WITHOUT_MATERNITY => app()->getLocale() === 'en' ? 'A Single Female Employee without Maternity' : 'A موظفة عزباء بدون أمومة',
            self::B_SINGLE_FEMALE_WITHOUT_MATERNITY => app()->getLocale() === 'en' ? 'B Single Female Employee without Maternity' : 'B موظفة عزباء بدون أمومة',
        };
    }
}
