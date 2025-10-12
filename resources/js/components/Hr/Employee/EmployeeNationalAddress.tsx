import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { Hash, MapPinHouse } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import { NationalAddress } from '@/types/hr';
import { FaCity, FaRegBuilding, FaStreetView } from 'react-icons/fa';

const EmployeeNationalAddress = ({ address }: { address: NationalAddress }) => {
    return (
        <Section
            title={t('National Address Information')}
            body={t('National Address Information')}
        >
            {address === null ? (
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
                        icon={FaRegBuilding}
                        label={t('Building Number')}
                        value={address.data.building_number}
                    />
                    <InfoField
                        icon={FaStreetView}
                        label={t('Street Name')}
                        value={address.data.street}
                    />
                    <InfoField
                        icon={MapPinHouse}
                        label={t('District')}
                        value={address.data.district}
                    />
                    <InfoField
                        icon={FaCity}
                        label={t('City')}
                        value={address.data.city}
                    />
                    <InfoField
                        icon={Hash}
                        label={t('Postal Code')}
                        value={address.data.postal_code}
                    />
                    <InfoField
                        icon={Hash}
                        label={t('Secondary Number')}
                        value={address.data.secondary_number}
                    />
                    <InfoField
                        icon={Hash}
                        label={t('Short Address')}
                        value={address.data.short_address}
                    />
                </div>
            )}
        </Section>
    );
};

export default EmployeeNationalAddress;
