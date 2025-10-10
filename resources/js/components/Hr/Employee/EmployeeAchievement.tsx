import { Trophy } from 'lucide-react';
import AchievementCard from './AchievementCard';
import NoRecords from '@/components/ui/NoRecords';
import { t } from 'i18next';

const EmployeeAchievement = ({ achievements }: { achievements: any[] }) => {
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
                </div>
            </div>

            {achievements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
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
