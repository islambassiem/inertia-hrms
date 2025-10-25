import EmployeeAchievement from '@/components/Hr/Employee/EmployeeAchievement';
import EmployeeContext from '@/contexts/EmployeeContext';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { Achievement as AchievementType, EmployeeData } from '@/types/hr';

const Achievement = ({
    employee,
    achievements,
}: {
    employee: EmployeeData;
    achievements: { data: AchievementType[] };
}) => {
    return (
        <AppLayout>
            <EmployeeContext.Provider value={employee}>
                <EmployeeLayout>
                    <EmployeeAchievement achievements={achievements.data} />
                </EmployeeLayout>
            </EmployeeContext.Provider>
        </AppLayout>
    );
};

export default Achievement;
