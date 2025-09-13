<?php

namespace App\Enums;

enum Gender: string
{
    case MALE = '1';
    case FEMALE = '2';

    /**
     * @return array<string, string>
     */
    public function label(): array
    {
        return match ($this) {
            self::MALE => ['id' => '1', 'name' => app()->getLocale() == 'en' ? 'Male' : 'ذكر'],
            self::FEMALE => ['id' => '2', 'name' => app()->getLocale() == 'en' ? 'Female' : 'انثى'],
        };
    }

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
}
