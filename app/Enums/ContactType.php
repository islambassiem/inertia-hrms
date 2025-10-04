<?php

declare(strict_types=1);

namespace App\Enums;

enum ContactType: string
{
    case MOBILE = '1';
    case EMAIL = '2';
    case PHONE = '3';

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
            self::MOBILE => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Mobile' : 'رقم الجوال'],
            self::EMAIL => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Email' : 'البريد الالكتروني'],
            self::PHONE => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Phone' : 'رقم الهاتف'],
        };
    }
}
