import EmployeeCourse from '@/components/Hr/Employee/EmployeeCourse';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';

const Achievement = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeCourse />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Achievement;
