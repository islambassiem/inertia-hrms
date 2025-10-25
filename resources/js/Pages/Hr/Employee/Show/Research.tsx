import EmployeeResearch from '@/components/Hr/Employee/EmployeeResearch';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, Research as ResearchType } from '@/types/hr';

const Research = ({
    employee,
    researches,
}: {
    employee: EmployeeData;
    researches: { data: ResearchType[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeResearch researches={researches.data} />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Research;
