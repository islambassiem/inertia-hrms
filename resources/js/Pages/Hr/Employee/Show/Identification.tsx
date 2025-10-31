import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, Idnetification } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import NationalID from '@/components/Hr/Employee/Identification';

const Identification = ({
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
                        <NationalID
                            identification={identification || null}
                            employee={employee}
                        />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Identification;
