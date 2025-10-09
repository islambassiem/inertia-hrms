import EmployeeContext from '@/contexts/EmployeeContext';
import { DollarSign } from 'lucide-react';
import { useContext } from 'react';
import SalaryCard from './SalaryCard';
import { t } from 'i18next';
import NoRecords from '@/components/ui/NoRecords';

const EmployeeSalary = () => {
    const employee = useContext(EmployeeContext);
    const salaries = employee.data.salaries;
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-ash-900 dark:text-ash-100 mb-2">
                            {t('Salary History')}
                        </h2>
                        <p className="text-ash-600 dark:text-ash-400">
                            {t(
                                'View employee compensation and salary progression'
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {salaries.length === 0 ? (
                <NoRecords
                    title={t('No salary records found')}
                    body={t('This employee has no salary history records.')}
                    icon={DollarSign}
                />
            ) : (
                <div className="space-y-4">
                    {salaries.map((salary, index) => (
                        <SalaryCard
                            key={salary.id}
                            salary={salary}
                            isLatest={index === 0}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EmployeeSalary;
