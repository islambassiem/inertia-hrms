<?php

declare(strict_types=1);

namespace App\Enums;

enum ResearchType: string
{
    case BOOK = '1';
    case RESEARCH = '2';
    case PAPER = '3';

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
            self::BOOK => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Book' : 'كتاب'],
            self::RESEARCH => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Research' : 'بحث علمي'],
            self::PAPER => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Paper' : 'ورقة علمية'],
        };
    }
}
