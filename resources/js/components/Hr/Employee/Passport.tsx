import { t } from 'i18next';
import Section from './Section';
import NoRecords from '@/components/ui/NoRecords';
import InfoField from './InfoField';
import { Calendar, Globe, Hash } from 'lucide-react';
import { useContext } from 'react';
import EmployeeContext from '@/contexts/EmployeeContext';
import { LiaPassportSolid } from 'react-icons/lia';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

const Passport = () => {
    const { language } = useLanguage();
    const employee = useContext(EmployeeContext);
    return (
        <Section title={t('Passport')} body={t('Passport Information')}>
            {employee.data.passport === null ? (
                <NoRecords
                    title={t('No passport information added yet.')}
                    body={t('This employee has no passport information.')}
                    icon={LiaPassportSolid}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                    <InfoField
                        icon={Hash}
                        label={t('Passport Number')}
                        value={employee.data.passport.id_number}
                    />
                    <InfoField
                        icon={Globe}
                        label={t('Place of Issue')}
                        value={employee.data.passport.place_of_issue}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Date of Issue')}
                        value={dateFormatter(
                            employee.data.passport.date_of_issue,
                            language
                        )}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Date of Expiry')}
                        value={dateFormatter(
                            employee.data.passport.date_of_expiry,
                            language
                        )}
                    />
                </div>
            )}
        </Section>
    );
};

export default Passport;
