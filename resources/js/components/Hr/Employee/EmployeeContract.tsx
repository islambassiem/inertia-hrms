import NoRecords from '@/components/ui/NoRecords';
import Section from './Section';
import { t } from 'i18next';
import {
    BriefcaseBusiness,
    Calendar,
    Check,
    IdCardLanyard,
    ReceiptText,
    TreePalm,
    X,
} from 'lucide-react';
import { EmployeeData } from '@/types/hr';
import InfoField from './InfoField';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { GiEngagementRing } from 'react-icons/gi';

const EmployeeContract = ({ employee }: { employee: EmployeeData }) => {
    const { language } = useLanguage();
    return (
        <Section
            title={t('Contract Information')}
            body={t('Contract Information')}
        >
            {employee === null ? (
                <NoRecords
                    title={t('No bank information added yet.')}
                    body={t('This employee has no bank information.')}
                    icon={ReceiptText}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                    <InfoField
                        icon={Calendar}
                        label={t('Joining Date')}
                        value={dateFormatter(
                            employee.data.joining_date,
                            language
                        )}
                    />
                    <InfoField
                        icon={Calendar}
                        label={t('Resignation Date')}
                        value={dateFormatter(
                            employee.data.resignation_date,
                            language
                        )}
                    />
                    <InfoField
                        icon={IdCardLanyard}
                        label={t('Position')}
                        value={employee.data.positions
                            .map((position) => position.name)
                            .join(', ')}
                    />
                    <InfoField
                        icon={BriefcaseBusiness}
                        label={t('Working days per week')}
                        value={employee.data.works_on_saturday ? '6' : '5'}
                    />
                    <InfoField
                        icon={TreePalm}
                        label={t('Vacation days per year')}
                        value={employee.data.vacation_class}
                    />
                    <InfoField
                        icon={GiEngagementRing}
                        label={t('Married Contract')}
                    >
                        {employee.data.has_married_contract ? (
                            <Check className="text-primary-500" />
                        ) : (
                            <X className="text-danger-500" />
                        )}
                    </InfoField>
                </div>
            )}
        </Section>
    );
};

export default EmployeeContract;
