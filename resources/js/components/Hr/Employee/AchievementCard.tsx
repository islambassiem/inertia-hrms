import { Achievement } from '@/types/hr';
import { Calendar, Gift, Trophy } from 'lucide-react';

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
    return (
        <div className="border border-ash-200 dark:border-ash-700 rounded-lg p-5 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex-shrink-0">
                    <Trophy className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-ash-900 dark:text-ash-100 mb-2 leading-snug">
                        {achievement.title || 'Achievement'}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ash-600 dark:text-ash-400">
                        {achievement.donor && (
                            <span className="flex items-center gap-1.5">
                                <Gift className="w-4 h-4 flex-shrink-0" />
                                <span className="line-clamp-1">
                                    {achievement.donor}
                                </span>
                            </span>
                        )}
                        {achievement.year && (
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                {achievement.year}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;
