<?php

declare(strict_types=1);

namespace App\Enums;

enum MaritalStatus: string
{
    case SINGLE = '1';
    case MARRIED = '2';
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
    public function label(): array
    {
        return match ($this) {
            self::SINGLE => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Single' : 'أعزب'],
            self::MARRIED => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Married' : 'متزوج'],
            self::OTHER => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
