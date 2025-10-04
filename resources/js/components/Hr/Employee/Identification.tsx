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
        <Section title={t('Identification')}>
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
        </Section>
    );
};

export default Identification;
