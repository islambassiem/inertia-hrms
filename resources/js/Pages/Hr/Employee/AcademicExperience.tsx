import EmployeeAcademicExperience from '@/components/Hr/Employee/EmployeeAcademicExperience';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';

const AcademicExperience = ({ employee }: { employee: EmployeeData }) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeAcademicExperience />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default AcademicExperience;
