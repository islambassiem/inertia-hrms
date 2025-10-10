<?php

declare(strict_types=1);

namespace App\Enums;

enum ResearchLanguage: string
{
    case ARABIC = '1';
    case ENGLISH = '2';
    case FRENCH = '3';
    case CHINESE = '4';
    case GERMAN = '5';
    case INDIAN = '6';
    case SPANISH = '7';
    case BENGALI = '8';
    case PORTOGESE = '9';
    case OTHER = '10';

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
            self::ARABIC => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Arabic' : 'العربية'],
            self::ENGLISH => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'English' : 'الإنجليزية'],
            self::FRENCH => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'French' : 'الفرنسية'],
            self::CHINESE => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Chinese' : 'الصينية'],
            self::GERMAN => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'German' : 'الألمانية'],
            self::INDIAN => ['id' => '6', 'name' => app()->getLocale() === 'en' ? 'Indian' : 'الهندية'],
            self::SPANISH => ['id' => '7', 'name' => app()->getLocale() === 'en' ? 'Spanish' : 'الإسبانية'],
            self::BENGALI => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'Bengali' : 'البنجالية'],
            self::PORTOGESE => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Portuguese' : 'البرتغالية'],
            self::OTHER => ['id' => '10', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
