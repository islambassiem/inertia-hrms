import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { BanknoteArrowUp, Hash, Landmark } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import { Bank as BankType } from '@/types/hr';

const EmployeeBank = ({ bank }: { bank: BankType }) => {
    return (
        <Section title={t('Bank Information')} body={t('Bank Information')}>
            {bank === null ? (
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
                        value={String(bank.data.account)}
                    />
                    <InfoField
                        icon={Landmark}
                        label={t('Bank Name')}
                        value={bank.data.bank.name}
                    />
                </div>
            )}
        </Section>
    );
};

export default EmployeeBank;
