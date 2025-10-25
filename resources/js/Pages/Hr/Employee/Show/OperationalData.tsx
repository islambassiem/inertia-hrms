import EmployeeOperationalData from '@/components/Hr/Employee/EmployeeOperationalData';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import OfficialLayout from '@/Layouts/Hr/OfficialLayout';
import { EmployeeData } from '@/types/hr';

const OperationalData = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <OfficialLayout>
                        <EmployeeOperationalData employee={employee} />
                    </OfficialLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default OperationalData;
