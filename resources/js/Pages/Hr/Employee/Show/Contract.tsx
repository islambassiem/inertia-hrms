import EmployeeContract from '@/components/Hr/Employee/EmployeeContract';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import OfficialLayout from '@/Layouts/Hr/OfficialLayout';
import { EmployeeData } from '@/types/hr';

const Contract = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <OfficialLayout>
                        <EmployeeContract employee={employee} />
                    </OfficialLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Contract;
