<?php

declare(strict_types=1);

namespace App\Enums;

enum ProfessionalRank: string
{
    case OFFICIAL_1 = '1';
    case OFFICIAL_2 = '2';
    case OFFICIAL_3 = '3';
    case OFFICIAL_4 = '4';
    case OFFICIAL_5 = '5';
    case OFFICIAL_6 = '6';
    case OFFICIAL_7 = '7';
    case OFFICIAL_8 = '8';
    case OFFICIAL_9 = '9';
    case OFFICIAL_10 = '10';
    case OFFICIAL_11 = '11';
    case OFFICIAL_12 = '12';
    case OFFICIAL_13 = '13';
    case OFFICIAL_14 = '14';
    case OFFICIAL_15 = '15';
    case EXCELLENT = '16';
    case DEPUTY_MINISTER = '17';
    case MINISTER = '18';
    case CONSULTANT = '19';
    case UNIVERSITY_PRESIDENT = '20';
    case LABOUR_A = '21';
    case LABOUR_B = '22';
    case LABOUR_C = '23';
    case LABOUR_D = '24';
    case WAGE_SCALE = '25';
    case OPERATION_SCALE = '26';
    case SERVICE_31 = '31';
    case SERVICE_32 = '32';
    case SERVICE_33 = '33';
    case ARTICLE105 = '51';
    case RESIDENT = '60';
    case HEALTH_CONSULTANT = '61';
    case HEALTH_SPECIALIST_DOCTOR = '62';
    case HEALTH_RESIDENT = '63';
    case HEALTH_PHARMACIST = '64';
    case HEALTH_SPECIALIST = '65';
    case HEALTH_TECHNICIAN = '66';
    case ASSISTANT_A = '67';
    case ASSISTANT_B = '68';
    case SENIOR_SPECIALIST = '69';
    case CONSULTANT_SPECIALIST = '70';
    case SENIOR_PHARMACIST = '71';
    case CONSULTANT_PHARMACIST = '72';
    case CONTRACTED = '73';
    case NA = '98';
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
     * @return array<string>
     */
    public function label(): array
    {
        return match ($this) {
            self::OFFICIAL_1 => ['id' => '1', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 1' : 'وظيفة رسمية - المرتبة الأولى'],
            self::OFFICIAL_2 => ['id' => '2', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 2' : 'وظيفة رسمية - المرتبة الثانية'],
            self::OFFICIAL_3 => ['id' => '3', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 3' : 'وظيفة رسمية - المرتبة الثالثة'],
            self::OFFICIAL_4 => ['id' => '4', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 4' : 'وظيفة رسمية - المرتبة الرابعة'],
            self::OFFICIAL_5 => ['id' => '5', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 5' : 'وظيفة رسمية - المرتبة الخامسة'],
            self::OFFICIAL_6 => ['id' => '6', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 6' : 'وظيفة رسمية - المرتبة السادسة'],
            self::OFFICIAL_7 => ['id' => '7', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 7' : 'وظيفة رسمية - المرتبة السابعة'],
            self::OFFICIAL_8 => ['id' => '8', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 8' : 'وظيفة رسمية - المرتبة الثامنة'],
            self::OFFICIAL_9 => ['id' => '9', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 9' : 'وظيفة رسمية - المرتبة التاسعة'],
            self::OFFICIAL_10 => ['id' => '10', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 10' : 'وظيفة رسمية - المرتبة العاشرة'],
            self::OFFICIAL_11 => ['id' => '11', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 11' : 'وظيفة رسمية - المرتبة الحادية عشر'],
            self::OFFICIAL_12 => ['id' => '12', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 12' : 'وظيفة رسمية - المرتبة الثانية عشر'],
            self::OFFICIAL_13 => ['id' => '13', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 13' : 'وظيفة رسمية - المرتبة الثالثة عشر'],
            self::OFFICIAL_14 => ['id' => '14', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 14' : 'وظيفة رسمية - المرتبة الرابعة عشر'],
            self::OFFICIAL_15 => ['id' => '15', 'name' => app()->getLocale() === 'en' ? 'Official Position - Grade 15' : 'وظيفة رسمية - المرتبة الخامسة عشر'],
            self::EXCELLENT => ['id' => '16', 'name' => app()->getLocale() === 'en' ? 'Exceptional Grade' : 'المرتبة الممتازة'],
            self::MINISTER => ['id' => '17', 'name' => app()->getLocale() === 'en' ? 'Deputy Minister' : 'نائب الوزير'],
            self::DEPUTY_MINISTER => ['id' => '18', 'name' => app()->getLocale() === 'en' ? 'Minister or Equivalent Rank' : 'وزير ومن في مرتبته'],
            self::CONSULTANT => ['id' => '19', 'name' => app()->getLocale() === 'en' ? 'Advisor / Consultant' : 'مستشار'],
            self::UNIVERSITY_PRESIDENT => ['id' => '20', 'name' => app()->getLocale() === 'en' ? 'University President' : 'رئيس الجامعة'],
            self::LABOUR_A => ['id' => '21', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category A' : 'بند العمال - فئة أ'],
            self::LABOUR_B => ['id' => '22', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category B' : 'بند العمال - فئة ب'],
            self::LABOUR_C => ['id' => '23', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category C' : 'بند العمال - فئة ج'],
            self::LABOUR_D => ['id' => '24', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category D' : 'بند العمال - فئة د'],
            self::WAGE_SCALE => ['id' => '25', 'name' => app()->getLocale() === 'en' ? 'Wage Scale' : 'بند أجور'],
            self::OPERATION_SCALE => ['id' => '26', 'name' => app()->getLocale() === 'en' ? 'Operations Contract' : 'بند تشغيل'],
            self::SERVICE_31 => ['id' => '31', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category A' : 'مستخدم - الدرجة 31'],
            self::SERVICE_32 => ['id' => '32', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category B' : 'مستخدم - الدرجة 32'],
            self::SERVICE_33 => ['id' => '33', 'name' => app()->getLocale() === 'en' ? 'Labor Scale - Category C' : 'مستخدم - الدرجة 33'],
            self::ARTICLE105 => ['id' => '51', 'name' => app()->getLocale() === 'en' ? 'Article 105 - Daily Wage' : 'بند105 - أجر يومي'],
            self::RESIDENT => ['id' => '60', 'name' => app()->getLocale() === 'en' ? 'Resident Doctor (Registrar)' : 'طبيب نائب'],
            self::HEALTH_CONSULTANT => ['id' => '61', 'name' => app()->getLocale() === 'en' ? 'Health Position - Consultant Physician' : 'وظائف صحية - طبيب استشاري'],
            self::HEALTH_SPECIALIST_DOCTOR => ['id' => '62', 'name' => app()->getLocale() === 'en' ? 'Health Position - Specialist Physician' : 'وظائف صحية - طبيب اختصاصي'],
            self::HEALTH_RESIDENT => ['id' => '63', 'name' => app()->getLocale() === 'en' ? 'Health Position - Resident Physician' : 'وظائف صحية - طبيب مقيم'],
            self::HEALTH_PHARMACIST => ['id' => '64', 'name' => app()->getLocale() === 'en' ? 'Health Position - Pharmacist' : 'وظائف صحية - صيدلي'],
            self::HEALTH_SPECIALIST => ['id' => '65', 'name' => app()->getLocale() === 'en' ? 'Health Position - Specialist (non-medical)' : 'وظائف صحية - اختصاصي'],
            self::HEALTH_TECHNICIAN => ['id' => '66', 'name' => app()->getLocale() === 'en' ? 'Health Position - Technician' : 'وظائف صحية - فني'],
            self::ASSISTANT_A => ['id' => '67', 'name' => app()->getLocale() === 'en' ? 'Health Position - Assistant Health Worker A' : 'وظائف صحية - مساعد صحي أ'],
            self::ASSISTANT_B => ['id' => '68', 'name' => app()->getLocale() === 'en' ? 'Health Position - Assistant Health Worker B' : 'وظائف صحية - مساعد صحي ب'],
            self::SENIOR_SPECIALIST => ['id' => '69', 'name' => app()->getLocale() === 'en' ? '	Senior Specialist' : 'أخصائي أول'],
            self::CONSULTANT_SPECIALIST => ['id' => '70', 'name' => app()->getLocale() === 'en' ? '	Consultant Specialist' : 'أخصائي أستشاري'],
            self::SENIOR_PHARMACIST => ['id' => '71', 'name' => app()->getLocale() === 'en' ? '	Senior Pharmacist' : 'صيدلي أول'],
            self::CONSULTANT_PHARMACIST => ['id' => '72', 'name' => app()->getLocale() === 'en' ? 'Consultant Pharmacist' : 'صيدلي أستشاري'],
            self::CONTRACTED => ['id' => '73', 'name' => app()->getLocale() === 'en' ? 'Contracted' : 'متعاقد'],
            self::NA => ['id' => '98', 'name' => app()->getLocale() === 'en' ? 'Not Applicable' : 'لاينطبق'],
            self::OTHERS => ['id' => '99', 'name' => app()->getLocale() === 'en' ? 'Other' : 'أخرى'],
        };
    }
}
