import EmployeeSalary from '@/components/Hr/Employee/EmployeeSalary';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, Salary as SalaryType } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';

const Salary = ({
    employee,
    salaries,
}: {
    employee: EmployeeData;
    salaries: { data: SalaryType[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeSalary salaries={salaries.data} />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Salary;
