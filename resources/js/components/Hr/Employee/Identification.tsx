import { t } from 'i18next';
import React, { useContext } from 'react';
import Section from './Section';
import InfoField from './InfoField';
import { Calendar, Globe, Hash } from 'lucide-react';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import EmployeeContext from '@/contexts/EmployeeContext';

const Identification = () => {
    const { language } = useLanguage();
    const employee = useContext(EmployeeContext);
    return (
        <Section title={t('Identification')} body={null}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                <InfoField
                    icon={Hash}
                    label={t('National ID')}
                    value={employee.data.identification?.id_number}
                />
                <InfoField
                    icon={Globe}
                    label={t('Place of Issue')}
                    value={dateFormatter(
                        employee.data.identification?.place_of_issue,
                        language
                    )}
                />
                <InfoField
                    icon={Calendar}
                    label={t('Date of Issue')}
                    value={dateFormatter(
                        employee.data.identification?.date_of_issue,
                        language
                    )}
                />
                <InfoField
                    icon={Calendar}
                    label={t('Date of Expiry')}
                    value={dateFormatter(
                        employee.data.identification?.date_of_expiry,
                        language
                    )}
                />
            </div>
        </Section>
    );
};

export default Identification;
