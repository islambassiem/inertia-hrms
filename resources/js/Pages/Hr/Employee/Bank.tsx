import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { Bank as BankType, EmployeeData } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import EmployeeBank from '@/components/Hr/Employee/EmployeeBank';

const Bank = ({
    employee,
    bank,
}: {
    employee: EmployeeData;
    bank: BankType;
}) => {
    console.log(bank);

    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <InfoLayout>
                        <EmployeeBank bank={bank || null} />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Bank;
