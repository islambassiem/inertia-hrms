import Section from './Section';
import { t } from 'i18next';
import { EmployeeData } from '@/types/hr';
import InfoField from './InfoField';
import { Blocks, Building2, Shapes, University } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { GrUserManager } from 'react-icons/gr';
import { PiIdentificationCardLight } from 'react-icons/pi';

const EmployeeHierarchy = ({ employee }: { employee: EmployeeData }) => {
    const { language } = useLanguage();
    return (
        <Section
            title={t('Employee Hierarchy')}
            body={t('Employee Hierarchy Information')}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                <InfoField
                    icon={Building2}
                    label={t('Entity')}
                    value={employee.data.entities
                        .map((entity) => entity.name)
                        .join(', ')}
                />
                <InfoField
                    icon={University}
                    label={t('College')}
                    value={employee.data.colleges
                        .map((college) => college.name)
                        .join(', ')}
                />
                <InfoField
                    icon={Shapes}
                    label={t('Category')}
                    value={employee.data.categories
                        .map((category) => category.name)
                        .join(', ')}
                />
                <InfoField
                    icon={PiIdentificationCardLight}
                    label={t('Sponsorship')}
                    value={employee.data.sponsorship}
                />
                <InfoField
                    icon={Blocks}
                    label={t('Department')}
                    value={employee.data.departments
                        .map((department) => department.name)
                        .join(', ')}
                />
                <InfoField
                    icon={GrUserManager}
                    label={t('Department head')}
                    value={
                        language === 'en'
                            ? employee.data.head.name_en
                            : employee.data.head.name_ar
                    }
                />
            </div>
        </Section>
    );
};

export default EmployeeHierarchy;
