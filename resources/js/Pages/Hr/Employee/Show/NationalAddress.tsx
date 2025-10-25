import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, NationalAddress } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import EmployeeNationalAddress from '@/components/Hr/Employee/EmployeeNationalAddress';

const Identification = ({
    employee,
    nationalAddress,
}: {
    employee: EmployeeData;
    nationalAddress: NationalAddress;
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <InfoLayout>
                        <EmployeeNationalAddress
                            address={nationalAddress || null}
                        />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Identification;
