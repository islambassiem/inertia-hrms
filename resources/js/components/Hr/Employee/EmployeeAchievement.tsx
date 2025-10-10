import EmployeeContext from '@/contexts/EmployeeContext';
import { Award, Trophy } from 'lucide-react';
import { useContext } from 'react';
import AchievementCard from './AchievementCard';
import NoRecords from '@/components/ui/NoRecords';
import { t } from 'i18next';

const EmployeeAchievement = () => {
    const employee = useContext(EmployeeContext);
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-ash-900 dark:text-ash-100 mb-2">
                            {t('Achievements & Awards')}
                        </h2>
                        <p className="text-ash-600 dark:text-ash-400">
                            {t(
                                'Recognition and honors received throughout career'
                            )}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center">
                                <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                <p className="text-xs text-ash-600 dark:text-ash-400">
                                    {t('Total Awards')}
                                </p>
                            </div>
                            <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                                {employee.data.achievements.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {employee.data.achievements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {employee.data.achievements.map((achievement) => (
                        <AchievementCard
                            key={achievement.id}
                            achievement={achievement}
                        />
                    ))}
                </div>
            ) : (
                <NoRecords
                    title={t('No achievements found')}
                    body={t(
                        'This employee has no recorded achievements or awards.'
                    )}
                    icon={Trophy}
                />
            )}
        </div>
    );
};

export default EmployeeAchievement;
