import EmployeeSalary from '@/components/Hr/Employee/EmployeeSalary';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';

const Salary = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeSalary />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Salary;
