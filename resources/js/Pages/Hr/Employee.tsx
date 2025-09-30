import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData } from '@/types/hr';

const Employee = ({ employee }: { employee: EmployeeData }) => {
    console.log(employee);
    return (
        <AppLayout>
            <EmployeeLayout>
                <div>{employee.data.empid}</div>
                <div>{employee.data.name_ar}</div>
                <div>{employee.data.name_en}</div>
                <div>{employee.data.identification}</div>
                <img src={employee.data.image} alt="employee_image" />
            </EmployeeLayout>
        </AppLayout>
    );
};

export default Employee;
