<?php

declare(strict_types=1);

namespace App\Enums;

enum AcademicRank: string
{
    case PROFESSOR = '11';
    case ASSOCIATE_PROFESSOR = '12';
    case ASSISTANT_PROFESSOR = '13';
    case LECTURER = '14';
    case INSTRUCTOR = '15';
    case LANGUAGE_TEACHER = '16';
    case RESEARCHER_ASSISTANT_A = '17';
    case RESEARCHER_ASSISTANT_B = '18';
    case TEACHER_ASSISTANT = '19';
    case TEACHER = '20';
    case TEACHER_FIRST_LEVEL = '21';
    case TEACHER_SECOND_LEVEL = '22';
    case TEACHER_THIRD_LEVEL = '23';
    case TEACHER_FOURTH_LEVEL = '24';
    case TEACHER_FIFTH_LEVEL = '25';
    case TEACHER_SIXTH_LEVEL = '26';
    case ASSISTANT_TEACHER = '27';
    case PRACTICING_TEACHER = '28';
    case ADVANCED_TEACHER = '29';
    case EXPERT_TEACHER = '30';
    case TRAINER = '31';
    case TRAINER_ASSISTANT = '32';
    case TECHNICIAN = '33';
    case NA = '98';
    case OTHER = '99';

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
            self::PROFESSOR => ['id' => '11', 'name' => app()->getLocale() === 'en' ? 'Professor' : 'الأستاذ'],
            self::ASSOCIATE_PROFESSOR => ['id' => '12', 'name' => app()->getLocale() === 'en' ? 'Associate Professor' : 'الأستاذ عادل'],
            self::ASSISTANT_PROFESSOR => ['id' => '13', 'name' => app()->getLocale() === 'en' ? 'Assistant Professor' : 'الأستاذ مساعد'],
            self::LECTURER => ['id' => '14', 'name' => app()->getLocale() === 'en' ? 'Lecturer' : 'المحاضر'],
            self::INSTRUCTOR => ['id' => '15', 'name' => app()->getLocale() === 'en' ? 'Instructor' : 'المدرس'],
            self::LANGUAGE_TEACHER => ['id' => '16', 'name' => app()->getLocale() === 'en' ? 'Language Teacher' : 'معلم لغة'],
            self::RESEARCHER_ASSISTANT_A => ['id' => '17', 'name' => app()->getLocale() === 'en' ? 'Researcher Assistant A' : 'مساعد بحث A'],
            self::RESEARCHER_ASSISTANT_B => ['id' => '18', 'name' => app()->getLocale() === 'en' ? 'Researcher Assistant B' : 'مساعد بحث B'],
            self::TEACHER_ASSISTANT => ['id' => '19', 'name' => app()->getLocale() === 'en' ? 'Teacher Assistant' : 'مساعد مدرس'],
            self::TEACHER => ['id' => '20', 'name' => app()->getLocale() === 'en' ? 'Teacher' : 'مدرس'],
            self::TEACHER_FIRST_LEVEL => ['id' => '21', 'name' => app()->getLocale() === 'en' ? 'Teacher First Level' : 'مدرس أول'],
            self::TEACHER_SECOND_LEVEL => ['id' => '22', 'name' => app()->getLocale() === 'en' ? 'Teacher Second Level' : 'مدرس ثاني'],
            self::TEACHER_THIRD_LEVEL => ['id' => '23', 'name' => app()->getLocale() === 'en' ? 'Teacher Third Level' : 'مدرس ثالث'],
            self::TEACHER_FOURTH_LEVEL => ['id' => '24', 'name' => app()->getLocale() === 'en' ? 'Teacher Fourth Level' : 'مدرس رابع'],
            self::TEACHER_FIFTH_LEVEL => ['id' => '25', 'name' => app()->getLocale() === 'en' ? 'Teacher Fifth Level' : 'مدرس خامس'],
            self::TEACHER_SIXTH_LEVEL => ['id' => '26', 'name' => app()->getLocale() === 'en' ? 'Teacher Sixth Level' : 'مدرس سادس'],
            self::ASSISTANT_TEACHER => ['id' => '27', 'name' => app()->getLocale() === 'en' ? 'Assistant Teacher / Teacher' : 'مساعد معلم / معلم'],
            self::PRACTICING_TEACHER => ['id' => '28', 'name' => app()->getLocale() === 'en' ? 'Practicing Teacher' : 'معلم ممارس'],
            self::ADVANCED_TEACHER => ['id' => '29', 'name' => app()->getLocale() === 'en' ? 'Advanced Teacher' : 'معلم متقدم'],
            self::EXPERT_TEACHER => ['id' => '30', 'name' => app()->getLocale() === 'en' ? 'Expert Teacher' : 'معلم خبير'],
            self::TRAINER => ['id' => '31', 'name' => app()->getLocale() === 'en' ? 'Trainer' : 'مدرب'],
            self::TRAINER_ASSISTANT => ['id' => '32', 'name' => app()->getLocale() === 'en' ? 'Trainer Assistant' : 'مساعد مدرب'],
            self::TECHNICIAN => ['id' => '33', 'name' => app()->getLocale() === 'en' ? 'Technician' : 'فني'],
            self::NA => ['id' => '98', 'name' => app()->getLocale() === 'en' ? 'N/A' : 'غير محدد'],
            self::OTHER => ['id' => '99', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
