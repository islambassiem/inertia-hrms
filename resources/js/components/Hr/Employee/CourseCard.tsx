import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { Course } from '@/types/hr';
import { t } from 'i18next';
import { Award, Building2, Calendar, Clock, Globe, MapPin } from 'lucide-react';

const CourseCard = ({ course }: { course: Course }) => {
    const { language } = useLanguage();

    const getTypeColor = () => {
        const type = course.type?.name?.toLowerCase();
        if (type?.includes('certificate') || type?.includes('certification')) {
            return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
        }
        if (type?.includes('workshop') || type?.includes('training')) {
            return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
        }
        if (type?.includes('online')) {
            return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
        }
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    };
    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>

                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {course.type && (
                                <span
                                    className={`px-2.5 py-1 text-xs rounded-full font-medium ${getTypeColor()}`}
                                >
                                    {course.type.name}
                                </span>
                            )}
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-snug">
                            {course.name || 'Course'}
                        </h3>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        {course.issuer && (
                            <div className="flex items-start gap-2">
                                <Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {t('Issuer')}
                                    </p>
                                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                                        {course.issuer}
                                    </p>
                                </div>
                            </div>
                        )}

                        {course.date_of_issue && (
                            <div className="flex items-start gap-2">
                                <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {t('Date')}
                                    </p>
                                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                                        {dateFormatter(
                                            course.date_of_issue,
                                            language
                                        )}
                                    </p>
                                </div>
                            </div>
                        )}

                        {course.period && (
                            <div className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {t('Duration')}
                                    </p>
                                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                                        {course.period}
                                    </p>
                                </div>
                            </div>
                        )}

                        {(course.city || course.Country) && (
                            <div className="flex items-start gap-2">
                                {course.city?.toLowerCase() === 'online' ? (
                                    <Globe className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                                ) : (
                                    <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                                )}
                                <div className="min-w-0">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {t('Course Location')}
                                    </p>
                                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                                        {[course.city, course.Country?.name]
                                            .filter(Boolean)
                                            .join(', ') || '-'}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
