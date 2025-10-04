import { t } from 'i18next';
import Section from './Section';
import NoRecords from '@/components/ui/NoRecords';
import InfoField from './InfoField';
import { Calendar, Globe, Hash } from 'lucide-react';
import { useContext } from 'react';
import EmployeeContext from '@/contexts/EmployeeContext';

const Passport = () => {
    const employee = useContext(EmployeeContext);
    return (
        <Section title={t('Passport')}>
            <div className="md:col-span-2 space-y-4">
                {employee.data.passport === null ? (
                    <NoRecords
                        message={t('No passport information added yet.')}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            value={employee.data.passport.date_of_issue}
                        />
                        <InfoField
                            icon={Calendar}
                            label={t('Date of Expiry')}
                            value={employee.data.passport.date_of_expiry}
                        />
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Passport;
