<?php

declare(strict_types=1);

namespace App\Enums;

enum CourseType: string
{
    case COURSE = '1';
    case CERTIFICATE = '2';
    case SYMPOSIUM = '3';
    case WORKSHOP = '4';
    case OTHER = '5';

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
            self::COURSE => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Training Course' : 'دورة تدريبية'],
            self::CERTIFICATE => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Certificate' : 'شهادة'],
            self::SYMPOSIUM => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Scientific Symposium' : 'ندوة علمية'],
            self::WORKSHOP => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Workshop' : 'ورشة تدريبية'],
            self::OTHER => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
