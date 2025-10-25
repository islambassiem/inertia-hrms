<?php

declare(strict_types=1);

namespace App\Enums;

enum Gender: int
{
    case MALE = 1;
    case FEMALE = 2;

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
            self::MALE => ['id' => 1, 'name' => app()->getLocale() === 'en' ? 'Male' : 'ذكر'],
            self::FEMALE => ['id' => 2, 'name' => app()->getLocale() === 'en' ? 'Female' : 'انثى'],
        };
    }

    public function value(): string
    {
        return match ($this) {
            self::MALE => app()->getLocale() === 'en' ? 'Male' : 'ذكر',
            self::FEMALE => app()->getLocale() === 'en' ? 'Female' : 'انثى',
        };
    }
}
