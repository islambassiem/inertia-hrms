<?php

declare(strict_types=1);

namespace App\Enums;

enum Rating: string
{
    case EXCELLENT_FIRST_DISTINCT = '1';
    case EXCELLENT_SECOND_DISTINCT = '2';
    case EXCELLENT = '3';
    case VERY_GOOD_SECOND_DISTINCT = '4';
    case VERY_GOOD_THIRD_DISTINCT = '0';
    case VERY_GOOD = '5';
    case GOOD = '6';
    case PASS = '7';
    case NA = '8';
    case OTHER = '9';

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
    public function lable(): array
    {
        return match ($this) {
            self::VERY_GOOD_THIRD_DISTINCT => ['id' => '0', 'name' => app()->getLocale() === 'en' ? 'Very Good Third Distinct' : 'جيد جداً مع مرتبة الشرف الثالثة'],
            self::EXCELLENT_FIRST_DISTINCT => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Excellent First Distinct' : 'ممتاز مع مرتبة الشرف الأولى'],
            self::EXCELLENT_SECOND_DISTINCT => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Excellent Second Distinct' : 'ممتاز مع مرتبة الشرف الثانية'],
            self::EXCELLENT => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Excellent' : 'ممتاز'],
            self::VERY_GOOD_SECOND_DISTINCT => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Very Good Second Distinct' : 'جيد جداً مع مرتبة الشرف الثانية'],
            self::VERY_GOOD => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'Very Good' : 'جيد جداً'],
            self::GOOD => ['id' => '6', 'name' => app()->getLocale() === 'en' ? 'Good' : 'جيد'],
            self::PASS => ['id' => '7', 'name' => app()->getLocale() === 'en' ? 'Pass' : 'مقبول'],
            self::NA => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'N/A' : 'لا ينطبق'],
            self::OTHER => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
