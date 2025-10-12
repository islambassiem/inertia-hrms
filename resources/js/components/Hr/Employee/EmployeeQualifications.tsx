import Section from './Section';
import { t } from 'i18next';
import NoRecords from '@/components/ui/NoRecords';
import QualificationCard from './QualificationCard';
import { GraduationCap } from 'lucide-react';
import { Qualification } from '@/types/hr';

const EmployeeQualifications = ({
    qualifications,
}: {
    qualifications: Qualification[];
}) => {
    console.log(qualifications);
    return (
        <Section
            title={t('Qualifications')}
            body={t('Employee Qualifications')}
        >
            {qualifications.length > 0 ? (
                <div className="space-y-4">
                    {qualifications.map((q) => (
                        <QualificationCard key={q.id} qualification={q} />
                    ))}
                </div>
            ) : (
                <NoRecords
                    title={t('No Qualifications Found')}
                    body={t('This employee has no qualification records.')}
                    icon={GraduationCap}
                />
            )}
        </Section>
    );
};

export default EmployeeQualifications;
