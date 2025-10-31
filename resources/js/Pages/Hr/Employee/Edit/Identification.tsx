import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import { EmployeeData, Idnetification } from '@/types/hr';
import IdentificationEdit from '@/components/Hr/Employee/IdentificationEdit';

const Info = ({
    employee,
    identification,
}: {
    employee: EmployeeData;
    identification: { data: Idnetification };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <InfoLayout>
                        <IdentificationEdit
                            employee={employee}
                            identification={identification}
                        />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Info;
