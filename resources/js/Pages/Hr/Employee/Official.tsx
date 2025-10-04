import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';
import EmployeeOfficial from '@/components/Hr/Employee/EmployeeOfficial';

const Official = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeOfficial />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Official;
