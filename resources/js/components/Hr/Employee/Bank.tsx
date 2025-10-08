import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { BanknoteArrowUp, Hash } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import EmployeeContext from '@/contexts/EmployeeContext';
import { useContext } from 'react';

const Bank = () => {
    const employee = useContext(EmployeeContext);
    return (
        <Section title={t('Bank Information')} body={t('Bank Information')}>
            {employee.data.bank === null ? (
                <NoRecords
                    title={t('No bank information added yet.')}
                    body={t('This employee has no bank information.')}
                    icon={BanknoteArrowUp}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                    <InfoField
                        icon={Hash}
                        label={t('Bank Account Number')}
                        value={String(employee.data.bank.account)}
                    />
                    <InfoField
                        icon={Hash}
                        label={t('Bank Name')}
                        value={employee.data.bank.bank.name}
                    />
                </div>
            )}
        </Section>
    );
};

export default Bank;
