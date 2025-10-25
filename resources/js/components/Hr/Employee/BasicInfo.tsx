import {
    Calendar,
    Heart,
    Mail,
    PhoneCall,
    Transgender,
    User,
} from 'lucide-react';
import InfoField from './InfoField';
import { t } from 'i18next';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import Section from './Section';
import { EmployeeData } from '@/types/hr';
import { router } from '@inertiajs/react';
import { edit } from '@/actions/App/Http/Controllers/BasicInfoController';
import { SiUnitednations } from 'react-icons/si';

const BasicInfo = ({ employee }: { employee: EmployeeData }) => {
    const { language } = useLanguage();
    return (
        <Section
            title={t('Basic Information')}
            body={t('Employee Personal Information')}
            onButtonClick={() => router.get(edit(employee.data.id))}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                <InfoField
                    icon={User}
                    label={t('Full Name (English)')}
                    value={employee.data.name_en}
                />
                <InfoField
                    icon={User}
                    label={t('Full Name (Arabic)')}
                    value={employee.data.name_ar}
                />
                <InfoField
                    icon={Transgender}
                    label={t('Gender')}
                    value={employee.data.gender.name}
                />
                <InfoField
                    icon={SiUnitednations}
                    label={t('Nationality')}
                    value={employee.data.nationality}
                />
                <InfoField
                    icon={Calendar}
                    label={t('Date of Birth')}
                    value={dateFormatter(employee.data.date_of_birth, language)}
                />
                <InfoField
                    icon={Heart}
                    label={t('Marital Status')}
                    value={employee.data.marital_status?.name}
                />
                <InfoField
                    icon={Mail}
                    label={t('Email Address')}
                    value={employee.data.email}
                />
                <InfoField
                    icon={PhoneCall}
                    label={t('Mobile Number')}
                    value={employee.data.mobile}
                />
            </div>
        </Section>
    );
};

export default BasicInfo;
