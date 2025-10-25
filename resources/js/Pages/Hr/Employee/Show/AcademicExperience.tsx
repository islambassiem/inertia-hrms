import EmployeeAcademicExperience from '@/components/Hr/Employee/EmployeeAcademicExperience';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import {
    AcademicExperience as AcademicExperienceType,
    EmployeeData,
} from '@/types/hr';

const AcademicExperience = ({
    employee,
    academicExperiences,
}: {
    employee: EmployeeData;
    academicExperiences: { data: AcademicExperienceType[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeAcademicExperience
                        academicExperiences={academicExperiences.data}
                    />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default AcademicExperience;
