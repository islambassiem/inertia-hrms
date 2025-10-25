import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, Idnetification } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import Passport from '@/components/Hr/Employee/Passport';

const Identification = ({
    employee,
    passport,
}: {
    employee: EmployeeData;
    passport: Idnetification;
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <InfoLayout>
                        <Passport passport={passport || null} />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Identification;
