<?php

declare(strict_types=1);

namespace App\Enums;

enum JobNature: string
{
    case TEACHING = '1';
    case RESEARCH = '2';
    case ADMINSTRATIVE = '3';
    case TEACHING_AND_RESEARCH = '4';
    case TEACHING_AND_ADMINSTRATIVE = '5';
    case RESEARCH_AND_ADMINSTRATIVE = '6';
    case TEACHING_RESEARCH_AND_ADMINSTRATIVE = '7';
    case OTHER = '8';

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
            self::TEACHING => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Teaching' : 'تدريسية'],
            self::RESEARCH => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Research' : 'بحثية'],
            self::ADMINSTRATIVE => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Adminstrative' : 'إدارية'],
            self::TEACHING_AND_RESEARCH => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Teaching and Research' : 'تدريسية وبحثية'],
            self::TEACHING_AND_ADMINSTRATIVE => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'Teaching and Adminstrative' : 'تدريسية وإدارية'],
            self::RESEARCH_AND_ADMINSTRATIVE => ['id' => '6', 'name' => app()->getLocale() === 'en' ? 'Research and Adminstrative' : 'بحثية وإدارية'],
            self::TEACHING_RESEARCH_AND_ADMINSTRATIVE => ['id' => '7', 'name' => app()->getLocale() === 'en' ? 'Teaching, Research and Adminstrative' : 'تدريسية وبحثية وإدارية'],
            self::OTHER => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
