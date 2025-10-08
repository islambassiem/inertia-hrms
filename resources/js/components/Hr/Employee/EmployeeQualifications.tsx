import EmployeeContext from '@/contexts/EmployeeContext';
import React, { useContext } from 'react';
import Section from './Section';
import { t } from 'i18next';
import NoRecords from '@/components/ui/NoRecords';
import QualificationCard from './QualificationCard';
import { GraduationCap } from 'lucide-react';

const EmployeeQualifications = () => {
    const employee = useContext(EmployeeContext);

    return (
        <Section
            title={t('Qualifications')}
            body={t('Employee Qualifications')}
        >
            {employee.data.qualifications.length > 0 ? (
                <div className="space-y-4">
                    {employee.data.qualifications.map((q) => (
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
