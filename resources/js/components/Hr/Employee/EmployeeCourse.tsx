import EmployeeContext from '@/contexts/EmployeeContext';
import { Award } from 'lucide-react';
import { useContext } from 'react';
import CourseCard from './CourseCard';
import NoRecords from '@/components/ui/NoRecords';
import { t } from 'i18next';

const EmployeeCourse = () => {
    const employee = useContext(EmployeeContext);
    console.log(employee);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-ash-900 dark:text-ash-100 mb-2">
                            {t('Courses & Training')}
                        </h2>
                        <p className="text-ash-600 dark:text-ash-400">
                            {t(
                                'Professional development courses, certifications, and training programs'
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {employee.data.courses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {employee.data.courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <NoRecords
                    title={t('No courses found.')}
                    body={t(
                        'This employee has no recorded courses or training programs.'
                    )}
                    icon={Award}
                />
            )}
        </div>
    );
};

export default EmployeeCourse;
