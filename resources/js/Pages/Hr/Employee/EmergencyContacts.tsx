import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmergencyContacts, EmployeeData } from '@/types/hr';
import EmployeeContext from '@/contexts/EmployeeContext';
import InfoLayout from '@/Layouts/Hr/InfoLayout';
import EmployeeEmergencyContacts from '@/components/Hr/Employee/EmployeeEmergencyContacts';

const EmergencyContact = ({
    employee,
    contacts,
}: {
    employee: EmployeeData;
    contacts: EmergencyContacts;
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <InfoLayout>
                        <EmployeeEmergencyContacts contacts={contacts} />
                    </InfoLayout>
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default EmergencyContact;
