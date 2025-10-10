<?php

declare(strict_types=1);

namespace App\Enums;

enum ResearchDomain: string
{
    case NATURAL = '1';
    case ENGINEERING = '2';
    case MEDICINE = '3';
    case AGRICULTURE = '4';
    case SOCIAL = '5';
    case ARTS = '6';
    case ISLAMIC = '7';
    case MULTIDISCIPULINARY = '8';

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
            self::NATURAL => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Natural science' : 'العلوم الطبيعية'],
            self::ENGINEERING => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Engineering and technology' : 'الهندسة والتقنية'],
            self::MEDICINE => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Medicine, health sciences and health care' : 'الطب والعلوم الصحية والرعاية الصحية'],
            self::AGRICULTURE => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Agricultural Sciences' : 'العلوم الزراعية'],
            self::SOCIAL => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'Social sciences, business and law' : 'العلوم الاجتماعية والأعمال والقانون'],
            self::ARTS => ['id' => '6', 'name' => app()->getLocale() === 'en' ? 'Humanities and arts' : 'الإنسانيات والفنون'],
            self::ISLAMIC => ['id' => '7', 'name' => app()->getLocale() === 'en' ? 'Islamic studies' : 'الدراسات الإسلامية'],
            self::MULTIDISCIPULINARY => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'Multidisciplinary services' : 'الخدمات متعدد التخصصات'],
        };
    }
}
