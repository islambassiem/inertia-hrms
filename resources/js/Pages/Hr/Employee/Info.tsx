import EmployeeInfo from '@/components/Hr/Employee/EmployeeInfo';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';

const Info = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeInfo />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Info;
