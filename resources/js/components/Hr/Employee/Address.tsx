import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { Hash, Home, MapPin } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import EmployeeContext from '@/contexts/EmployeeContext';
import { useContext } from 'react';

const Address = () => {
    const employee = useContext(EmployeeContext);
    return (
        <Section title={t('National Address Information')}>
            <div className="md:col-span-2 space-y-4">
                {employee.data.address === null ? (
                    <NoRecords
                        message={t(
                            'No national address information added yet.'
                        )}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
        </Section>
    );
};

export default Address;
