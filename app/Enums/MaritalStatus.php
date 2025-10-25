<?php

declare(strict_types=1);

namespace App\Enums;

enum MaritalStatus: int
{
    case SINGLE = 1;
    case MARRIED = 2;
    case OTHER = 9;

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
            self::SINGLE => ['id' => 1, 'name' => app()->getLocale() === 'en' ? 'Single' : 'أعزب'],
            self::MARRIED => ['id' => 2, 'name' => app()->getLocale() === 'en' ? 'Married' : 'متزوج'],
            self::OTHER => ['id' => 9, 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }

    public function value(): string
    {
        return match ($this) {
            self::SINGLE => app()->getLocale() === 'en' ? 'Single' : 'أعزب',
            self::MARRIED => app()->getLocale() === 'en' ? 'Married' : 'متزوج',
            self::OTHER => app()->getLocale() === 'en' ? 'Other' : 'أخرى',
        };
    }
}
