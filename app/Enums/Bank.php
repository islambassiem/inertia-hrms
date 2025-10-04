<?php

declare(strict_types=1);

namespace App\Enums;

enum Bank: string
{
    case ALBI = '1';
    case ARNB = '2';
    case BJAZ = '3';
    case BSFR = '4';
    case INMA = '5';
    case NCBK = '6';
    case RIBL = '7';
    case RJHI = '8';
    case SABB = '9';
    case SAMB = '10';
    case SIBC = '11';
    case GIB = '12';

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
            self::ALBI => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Bank AlBilad' : 'بنك البلاد'],
            self::ARNB => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Arab National Bank' : 'البنك العربي الوطني'],
            self::BJAZ => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Bank AlJazira' : 'بنك الجزيرة'],
            self::BSFR => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Banque Saudi Fransi' : 'البنك السعودي الفرنسي'],
            self::INMA => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'alinma bank' : 'بنك الانماء'],
            self::NCBK => ['id' => '6', 'name' => app()->getLocale() === 'en' ? 'Saudi National Bank' : 'البنك الأهلي السعودي'],
            self::RIBL => ['id' => '7', 'name' => app()->getLocale() === 'en' ? 'Riyad Bank' : 'بنك الرياض'],
            self::RJHI => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'Al Rajhi Bank' : 'بنك الراجحي'],
            self::SABB => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Saudi Awwal Bank (SAB)' : 'البنك السعودي البريطاني'],
            self::SAMB => ['id' => '10', 'name' => app()->getLocale() === 'en' ? 'Samba' : 'بنك سامبا'],
            self::SIBC => ['id' => '11', 'name' => app()->getLocale() === 'en' ? 'Saudi Investment Bank' : 'البنك السعودي للاستثمار'],
            self::GIB => ['id' => '12', 'name' => app()->getLocale() === 'en' ? 'Gulf International Bank Saudi Arabia (GIB-SA)' : 'بنك الخليج الدولي - السعودية'],
        };
    }
}
