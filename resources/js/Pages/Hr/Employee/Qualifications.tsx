import EmployeeQualifications from '@/components/Hr/Employee/EmployeeQualifications';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';

const Qualifications = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeQualifications />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Qualifications;
