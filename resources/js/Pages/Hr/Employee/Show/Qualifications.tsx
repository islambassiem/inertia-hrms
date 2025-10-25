import EmployeeQualifications from '@/components/Hr/Employee/EmployeeQualifications';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, Qualification } from '@/types/hr';

const Qualifications = ({
    employee,
    qualifications,
}: {
    employee: EmployeeData;
    qualifications: { data: Qualification[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeQualifications
                        qualifications={qualifications.data}
                    />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Qualifications;
