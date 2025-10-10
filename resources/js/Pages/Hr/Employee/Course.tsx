import EmployeeCourse from '@/components/Hr/Employee/EmployeeCourse';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { Course, EmployeeData } from '@/types/hr';

const Achievement = ({
    employee,
    courses,
}: {
    employee: EmployeeData;
    courses: { data: Course[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeCourse courses={courses.data} />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Achievement;
