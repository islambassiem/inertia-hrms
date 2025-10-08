<?php

declare(strict_types=1);

namespace App\Enums;

enum AppointmentType: string
{
    case OFFICIAL = '1';
    case CONTRACT = '2';
    case PARTTIME = '3';
    case TRANSFER = '4';
    case NA = '8';
    case UNDETERMINED = '9';

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
            self::OFFICIAL => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Official position (Faculty cadre / Academic staff member)' : 'وظيفة رسمية (كادر أعضاء هيئة التدريس)'],
            self::CONTRACT => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Contracted (Employee under a fixed-term or renewable contract)' : 'متعاقد'],
            self::PARTTIME => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Part-time/Adjunct (Collaborator or Adjunct Faculty)' : 'متعاون '],
            self::TRANSFER => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Transferred (from another department or institution)' : 'منقول'],
            self::NA => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'Not applicable' : 'لاينطبق'],
            self::UNDETERMINED => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Unspecified / Undetermined' : 'غير محدد'],
        };
    }
}
