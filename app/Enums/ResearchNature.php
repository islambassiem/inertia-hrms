<?php

declare(strict_types=1);

namespace App\Enums;

enum ResearchNature: string
{
    case THEORETICAL = '1';
    case EMPIRICAL = '2';
    case MIXED = '3';

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
            self::THEORETICAL => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Theoretical' : 'أساسي'],
            self::EMPIRICAL => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Empirical' : 'تطبيقي'],
            self::MIXED => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Research in empirical development' : 'بحوث في التطوير التجريبي'],
        };
    }
}
