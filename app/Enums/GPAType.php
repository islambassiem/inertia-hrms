<?php

declare(strict_types=1);

namespace App\Enums;

enum GPAType: string
{
    case FIVE_POINTS = '1';
    case FOUR_POINTS = '2';
    case PERCENTAGE = '3';
    case OTHER = '4';

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
            self::FIVE_POINTS => ['id' => '1', 'name' => app()->getLocale() === 'en' ? '5 Point Scale' : 'نظام المعدل التراكمي المكون من خمس نقاط'],
            self::FOUR_POINTS => ['id' => '2', 'name' => app()->getLocale() === 'en' ? '4 Point Scale' : 'نظام المعدل التراكمي المكون من أربع نقاط'],
            self::PERCENTAGE => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Percentage' : 'نظام المعدل التراكمي المئوي'],
            self::OTHER => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
