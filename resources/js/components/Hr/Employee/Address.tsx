import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { Hash, Home, MapPin, MapPinHouse } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import EmployeeContext from '@/contexts/EmployeeContext';
import { useContext } from 'react';

const Address = () => {
    const employee = useContext(EmployeeContext);
    return (
        <Section
            title={t('National Address Information')}
            body={t('National Address Information')}
        >
            {employee.data.address === null ? (
                <NoRecords
                    title={t('No national address information added yet.')}
                    body={t(
                        'This employee has no national address information.'
                    )}
                    icon={MapPinHouse}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                    <InfoField
                        icon={Home}
                        label={t('Building Number')}
                        value={employee.data.address.building_number}
                    />
                    <InfoField
                        icon={Home}
                        label={t('Street Name')}
                        value={employee.data.address.street}
                    />
                    <InfoField
                        icon={Home}
                        label={t('District')}
                        value={employee.data.address.district}
                    />
                    <InfoField
                        icon={MapPin}
                        label={t('City')}
                        value={employee.data.address.city}
                    />
                    <InfoField
                        icon={Hash}
                        label={t('Postal Code')}
                        value={employee.data.address.postal_code}
                    />
                    <InfoField
                        icon={Hash}
                        label={t('Secondary Number')}
                        value={employee.data.address.secondary_number}
                    />
                </div>
            )}
        </Section>
    );
};

export default Address;
