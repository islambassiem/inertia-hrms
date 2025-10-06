import { useContext } from 'react';
import Section from './Section';
import EmployeeContext from '@/contexts/EmployeeContext';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import InfoField from './InfoField';
import { Calendar, Check, Info, X } from 'lucide-react';
import { t } from 'i18next';

const EmployeeOfficial = () => {
    const employee = useContext(EmployeeContext);
    const { language } = useLanguage();
    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="bg-white dark:bg-ash-800 rounded-lg shadow-sm p-6">
                <Section title={t('Official Information')}>
                    <InfoField icon={Info} label={t('Job Status')}>
                        {employee.data.is_active ? (
                            <Check className="text-primary-500" />
                        ) : (
                            <X className="text-danger-500" />
                        )}
                    </InfoField>
                    <InfoField icon={Info} label={t('Finger Print Status')}>
                        {employee.data.has_biometric ? (
                            <Check className="text-primary-500" />
                        ) : (
                            <X className="text-danger-500" />
                        )}
                    </InfoField>
                    <InfoField
                        icon={Info}
                        label={t('Entity')}
                        value={employee.data.entities
                            .map((entity) => entity.name)
                            .join(', ')}
                    />
                    <InfoField
                        icon={Info}
                        label={t('Sponsorship')}
                        value={employee.data.sponsorship}
                    />
                    <InfoField
                        icon={Info}
                        label={t('Category')}
                        value={employee.data.categories
                            .map((category) => category.name)
                            .join(', ')}
                    />
                    <InfoField
                        icon={Info}
                        label={t('Department')}
                        value={employee.data.departments
                            .map((department) => department.name)
                            .join(', ')}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Position')}
                        value={employee.data.positions
                            .map((position) => position.name)
                            .join(', ')}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('College')}
                        value={employee.data.colleges
                            .map((college) => college.name)
                            .join(', ')}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Joining Date')}
                        value={dateFormatter(
                            employee.data.joining_date,
                            language
                        )}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Resignation Date')}
                        value={dateFormatter(
                            employee.data.resignation_date,
                            language
                        )}
                    />
                </Section>
            </div>
        </div>
    );
};

export default EmployeeOfficial;
