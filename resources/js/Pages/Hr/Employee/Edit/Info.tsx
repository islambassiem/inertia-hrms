import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import BasicInfoEdit from '@/components/Hr/Employee/BasicInfoEdit';
import { EmployeeData, ResourceList } from '@/types/hr';

const Info = ({
    employee,
    countries,
    genders,
    maritalStatus,
}: {
    employee: EmployeeData;
    countries: ResourceList;
    genders: ResourceList;
    maritalStatus: ResourceList;
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <InfoLayout>
                        <BasicInfoEdit
                            employee={employee}
                            countries={countries}
                            genders={genders}
                            maritalStatus={maritalStatus}
                        />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Info;
