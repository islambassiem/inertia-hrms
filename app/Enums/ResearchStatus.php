<?php

declare(strict_types=1);

namespace App\Enums;

enum ResearchStatus: string
{
    case INDIVIDUAL = '1';
    case COLLECTIVE = '2';

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
            self::INDIVIDUAL => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Individual' : 'فردي'],
            self::COLLECTIVE => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Collaborative' : 'مشترك مع آخرون'],
        };
    }
}
