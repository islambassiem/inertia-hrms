import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import {
    Calendar,
    Edit,
    Globe,
    Hash,
    Heart,
    Home,
    Mail,
    MapPin,
    Phone,
    User,
} from 'lucide-react';
import { EmployeeData } from '@/types/hr';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from 'i18next';
import Section from '@/components/Hr/Employee/Section';
import InfoField from '@/components/Hr/Employee/InfoField';

const Info = ({ employee }: { employee: EmployeeData }) => {
    const { language } = useLanguage();
    return (
        <AppLayout>
            <EmployeeLayout employee={employee}>
                <div className="bg-white dark:bg-ash-800 rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-bold text">
                            {t('Personal Information')}
                        </h2>
                        <button
                            onClick={() => {
                                console.log('Navigate to edit page');
                                alert(
                                    'Navigate to: /employees/2847/personal/edit'
                                );
                            }}
                            className="flex items-center gap-2 px-4 py-2 btn-primary rounded-lg transition-colors font-medium"
                        >
                            <Edit className="w-4 h-4" />
                            {t('Edit Information')}
                        </button>
                    </div>

                    {/* Basic Information */}
                    <Section title={t('Basic Information')}>
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
                            value={'phone'}
                        />
                        <InfoField
                            icon={Phone}
                            label={t('Mobile Number')}
                            value={'phone'}
                        />
                        <InfoField
                            icon={Calendar}
                            label={t('Date of Birth')}
                            value={dateFormatter(
                                employee.data.date_of_birth,
                                language
                            )}
                        />
                        <InfoField
                            icon={User}
                            label={t('Gender')}
                            value={employee.data.gender.name}
                        />
                        <InfoField
                            icon={Heart}
                            label={t('Marital Status')}
                            value={'marital_status'}
                        />
                    </Section>

                    {/* Identification */}
                    <Section title={t('Identification')}>
                        <InfoField
                            icon={Hash}
                            label={t('National ID')}
                            value={employee.data.identification}
                        />
                        <InfoField
                            icon={Globe}
                            label={t('Passport Number')}
                            value={'passport'}
                        />
                        <InfoField
                            icon={Globe}
                            label={t('Nationality')}
                            value={employee.data.nationality}
                        />
                        <InfoField
                            icon={Heart}
                            label={t('Blood Group')}
                            value={'blood_group'}
                        />
                    </Section>

                    <Section title={t('Bank Information')}>
                        <InfoField
                            icon={Hash}
                            label={t('Bank Account Number')}
                            value={'IBAN'}
                        />
                        <InfoField
                            icon={Hash}
                            label={t('Bank Name')}
                            value={'bank_name'}
                        />
                    </Section>

                    {/* Address Information */}
                    <Section title={t('Address Information')}>
                        <div className="md:col-span-2">
                            <InfoField
                                icon={Home}
                                label={t('Full Address')}
                                value={'address'}
                            />
                        </div>
                        <InfoField
                            icon={MapPin}
                            label={t('City')}
                            value={'city'}
                        />
                        <InfoField
                            icon={Globe}
                            label={t('Country')}
                            value={'country'}
                        />
                        <InfoField
                            icon={Hash}
                            label={t('Postal Code')}
                            value={'postal_code'}
                        />
                    </Section>

                    {/* Emergency Contact */}
                    <Section title={t('Emergency Contact')}>
                        <InfoField
                            icon={User}
                            label={t('Contact Name')}
                            value={'emergency_contact_name'}
                        />
                        <InfoField
                            icon={Phone}
                            label={t('Contact Phone')}
                            value={'emergency_contact_phone'}
                        />
                        <InfoField
                            icon={Heart}
                            label={t('Relationship')}
                            value={'emergency_contact_relation'}
                        />
                    </Section>
                </div>
            </EmployeeLayout>
        </AppLayout>
    );
};

export default Info;
