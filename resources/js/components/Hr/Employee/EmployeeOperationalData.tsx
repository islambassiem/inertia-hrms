import { t } from 'i18next';
import React from 'react';
import Section from './Section';
import { EmployeeData } from '@/types/hr';
import InfoField from './InfoField';
import {
    Check,
    Fingerprint,
    SaudiRiyal,
    SquareActivity,
    X,
} from 'lucide-react';
import { VscVmActive } from 'react-icons/vsc';

const EmployeeOperationalData = ({ employee }: { employee: EmployeeData }) => {
    return (
        <Section
            title={t('Operational Data')}
            body={t('Operational Data Information')}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                <InfoField icon={VscVmActive} label={t('Job Status')}>
                    {employee.data.is_active ? (
                        <Check className="text-primary-500" />
                    ) : (
                        <X className="text-danger-500" />
                    )}
                </InfoField>
                <InfoField icon={Fingerprint} label={t('Finger Print Status')}>
                    {employee.data.has_biometric ? (
                        <Check className="text-primary-500" />
                    ) : (
                        <X className="text-danger-500" />
                    )}
                </InfoField>
                <InfoField icon={SaudiRiyal} label={t('Salary Status')}>
                    {employee.data.has_salary ? (
                        <Check className="text-primary-500" />
                    ) : (
                        <X className="text-danger-500" />
                    )}
                </InfoField>
                <InfoField icon={SquareActivity} label={t('Insurance Class')}>
                    {employee.data.insurance_class?.name}
                </InfoField>
            </div>
        </Section>
    );
};

export default EmployeeOperationalData;
