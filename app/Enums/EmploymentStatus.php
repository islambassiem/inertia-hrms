<?php

declare(strict_types=1);

namespace App\Enums;

enum EmploymentStatus: string
{
    case ONJOB_FULL = '11';
    case ONJOB_PART = '12';
    case CONSULTANT = '21';
    case DELEGATE = '22';
    case SCHOLARSHIP = '23';
    case SUSPENDED = '24';
    case ACADEMIC_LEAVE = '25';
    case RETIRED = '26';
    case DISMISSED = '27';
    case ENDED_CONTRACT = '28';
    case OTHERS = '99';

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
            self::ONJOB_FULL => ['id' => '11', 'name' => app()->getLocale() === 'en' ? 'On-the-job and not associated with work outside the educational institution' : 'على رأس العمل ولا يرتبط بأعمال خارج الجهة التعليمية'],
            self::ONJOB_PART => ['id' => '12', 'name' => app()->getLocale() === 'en' ? 'On-the-job and working as a part-time consultant for an external entity' : 'على رأس العمل ويعمل مستشارا غير متفرغ لدى جهة خارجية'],
            self::CONSULTANT => ['id' => '21', 'name' => app()->getLocale() === 'en' ? 'Working as a full-time consultant for an external entity' : 'يعمل مستشارا متفرغا لجهة خارجية'],
            self::DELEGATE => ['id' => '22', 'name' => app()->getLocale() === 'en' ? 'Delegate or seconded to an external entity' : 'مندوب أو معار لجهة خارجية'],
            self::SCHOLARSHIP => ['id' => '23', 'name' => app()->getLocale() === 'en' ? 'Scholarship student' : 'مبتعث'],
            self::SUSPENDED => ['id' => '24', 'name' => app()->getLocale() === 'en' ? 'Suspended from duty (typically pending investigation or disciplinary action)' : 'مكفوف اليد'],
            self::ACADEMIC_LEAVE => ['id' => '25', 'name' => app()->getLocale() === 'en' ? 'On academic leave (for research or scholarly work)' : 'تفرغ علمي'],
            self::RETIRED => ['id' => '26', 'name' => app()->getLocale() === 'en' ? 'Retired' : 'متقاعد'],
            self::DISMISSED => ['id' => '27', 'name' => app()->getLocale() === 'en' ? 'Record closed / Dismissed / Deregistered (depending on context)' : 'مطوي قيده'],
            self::ENDED_CONTRACT => ['id' => '28', 'name' => app()->getLocale() === 'en' ? 'Contract ended' : 'عقد منتهي'],
            self::OTHERS => ['id' => '99', 'name' => app()->getLocale() === 'en' ? 'Others' : 'اخرى'],
        };
    }
}
