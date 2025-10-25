import EmployeeHierarchy from '@/components/Hr/Employee/EmployeeHierarchy';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import OfficialLayout from '@/Layouts/Hr/OfficialLayout';
import { EmployeeData } from '@/types/hr';

const Hierarchy = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <OfficialLayout>
                        <EmployeeHierarchy employee={employee} />
                    </OfficialLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Hierarchy;
