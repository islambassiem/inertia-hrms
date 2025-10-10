<?php

declare(strict_types=1);

namespace App\Enums;

enum ResearchProgress: string
{
    case FINISHED = '1';
    case IN_PROGRESS = '2';
    case APPROVED = '3';

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
            self::FINISHED => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Finished' : 'منجز'],
            self::IN_PROGRESS => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'In Progress' : 'جاري تنفيذه'],
            self::APPROVED => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Approved and has not started' : 'موافق عليه ولم يبدأ'],
        };
    }
}
