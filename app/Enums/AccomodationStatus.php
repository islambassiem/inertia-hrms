<?php

declare(strict_types=1);

namespace App\Enums;

enum AccomodationStatus: string
{
    case RESIDES = '1';
    case NOT_RESIDES = '2';
    case NO_ACCOMODATION = '8';
    case UNKNOWN = '9';

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
            self::RESIDES => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Resides in the institution’s housing' : 'يسكن في إسكان الجهة التعليمية'],
            self::NOT_RESIDES => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Does not reside in the institution’s housing' : 'لا يسكن في إسكان الجهة التعليمية'],
            self::NO_ACCOMODATION => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'No housing is available at the institution' : 'لا يوجد إسكان في الجهة التعليمية'],
            self::UNKNOWN => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Unspecified' : 'غير محدد'],
        };
    }
}
