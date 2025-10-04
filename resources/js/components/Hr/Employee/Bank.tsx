import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { Hash } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import EmployeeContext from '@/contexts/EmployeeContext';
import { useContext } from 'react';

const Bank = () => {
    const employee = useContext(EmployeeContext);
    return (
        <Section title={t('Bank Information')}>
            <div className="md:col-span-2 space-y-4">
                {employee.data.bank === null ? (
                    <NoRecords message={t('No bank information added yet.')} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
        </Section>
    );
};

export default Bank;
