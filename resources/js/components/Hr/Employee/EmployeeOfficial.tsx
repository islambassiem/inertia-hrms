import React, { useContext } from 'react';
import Section from './Section';
import EmployeeContext from '@/contexts/EmployeeContext';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import InfoField from './InfoField';
import { Calendar } from 'lucide-react';

const EmployeeOfficial = () => {
    const employee = useContext(EmployeeContext);
    const { language } = useLanguage();
    console.log(employee);
    return (
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="bg-white dark:bg-ash-800 rounded-lg shadow-sm p-6">
                <Section title="Official Information">
                    <InfoField
                        icon={Calendar}
                        label="Joning Date"
                        value={dateFormatter(
                            employee.data.joining_date,
                            language
                        )}
                    />
                    <InfoField
                        icon={Calendar}
                        label="Resignation Date"
                        value={dateFormatter(
                            employee.data.resignation_date,
                            language
                        )}
                    />
                </Section>
            </div>
        </div>
    );
};

export default EmployeeOfficial;
