<?php

declare(strict_types=1);

namespace App\Enums;

enum StudyNature: string
{
    case RESEARCH = '1';
    case SUBJECT = '2';
    case BOTH = '3';

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
            self::RESEARCH => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Research Only' : 'بحث فقط'],
            self::SUBJECT => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Subjects Only' : 'مواد فقط'],
            self::BOTH => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Research and Subjects' : 'بحث ومواد'],
        };
    }
}
