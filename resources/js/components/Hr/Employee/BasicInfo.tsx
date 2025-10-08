import { Calendar, Heart, Mail, Phone, User } from 'lucide-react';
import InfoField from './InfoField';
import { t } from 'i18next';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import Section from './Section';
import { useContext } from 'react';
import EmployeeContext from '@/contexts/EmployeeContext';

const BasicInfo = () => {
    const { language } = useLanguage();
    const employee = useContext(EmployeeContext);
    return (
        <Section
            title={t('Basic Information')}
            body={t('Employee Personal Information')}
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
                    icon={Mail}
                    label={t('Email Address')}
                    value={employee.data.email}
                />
                <InfoField
                    icon={Phone}
                    label={t('Phone Number')}
                    value={employee.data.phone}
                />
                <InfoField
                    icon={Phone}
                    label={t('Mobile Number')}
                    value={employee.data.mobile}
                />
                <InfoField
                    icon={Calendar}
                    label={t('Date of Birth')}
                    value={dateFormatter(employee.data.date_of_birth, language)}
                />
                <InfoField
                    icon={User}
                    label={t('Gender')}
                    value={employee.data.gender.name}
                />
                <InfoField
                    icon={Heart}
                    label={t('Marital Status')}
                    value={employee.data.marital_status?.name}
                />
            </div>
        </Section>
    );
};

export default BasicInfo;
