import EmployeeExperience from '@/components/Hr/Employee/EmployeeExperience';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, Experience } from '@/types/hr';

const AcademicExperience = ({
    employee,
    experiences,
}: {
    employee: EmployeeData;
    experiences: { data: Experience[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeExperience experiences={experiences.data} />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default AcademicExperience;
