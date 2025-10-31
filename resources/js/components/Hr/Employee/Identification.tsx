import { t } from 'i18next';
import Section from './Section';
import InfoField from './InfoField';
import { Calendar, Globe, Hash } from 'lucide-react';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { EmployeeData, Idnetification } from '@/types/hr';
import NoRecords from '@/components/ui/NoRecords';
import { router } from '@inertiajs/react';
import { edit } from '@/actions/App/Http/Controllers/IdentificationController';

const Identification = ({
    employee,
    identification,
}: {
    employee: EmployeeData;
    identification: { data: Idnetification };
}) => {
    const { language } = useLanguage();

    return (
        <Section
            title={t('Identification')}
            body={t('National ID Information')}
            onButtonClick={() =>
                router.get(
                    edit({
                        employee: employee.data.id,
                        identification: identification.data.id,
                    }).url
                )
            }
        >
            {identification === null ? (
                <NoRecords
                    title={t('No national ID information added yet.')}
                    body={t('This employee has no national ID information.')}
                    icon={Hash}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                    <InfoField
                        icon={Hash}
                        label={t('National ID')}
                        value={identification.data.id_number}
                    />
                    <InfoField
                        icon={Globe}
                        label={t('Place of Issue')}
                        value={identification.data.place_of_issue}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Date of Issue')}
                        value={dateFormatter(
                            identification.data.date_of_issue,
                            language
                        )}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Date of Expiry')}
                        value={dateFormatter(
                            identification.data.date_of_expiry,
                            language
                        )}
                    />
                </div>
            )}
        </Section>
    );
};

export default Identification;
