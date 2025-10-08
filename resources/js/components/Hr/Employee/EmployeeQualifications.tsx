import EmployeeContext from '@/contexts/EmployeeContext';
import React, { useContext } from 'react';
import Section from './Section';
import { t } from 'i18next';
import NoRecords from '@/components/ui/NoRecords';
import QualificationCard from './QualificationCard';

const EmployeeQualifications = () => {
    const employee = useContext(EmployeeContext);
    console.log(employee);

    return (
        <div className="bg-white dark:bg-ash-800 shadow-sm border-b border-ash-200 dark:border-ash-700">
            <div className="bg-white dark:bg-ash-800 rounded-lg shadow-sm p-6">
                <Section title={t('Qualifications')}>
                    <div className="col-span-2 p-6">
                        {employee.data.qualifications.length > 0 ? (
                            <div className="space-y-4">
                                {employee.data.qualifications.map((q) => (
                                    <QualificationCard
                                        key={q.id}
                                        qualification={q}
                                    />
                                ))}
                            </div>
                        ) : (
                            <NoRecords message={t('No Qualifications Found')} />
                        )}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default EmployeeQualifications;
