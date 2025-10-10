import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { AcademicExperience } from '@/types/hr';
import { t } from 'i18next';
import {
    BookMarked,
    Calendar,
    FileText,
    Home,
    MapPin,
    Users,
} from 'lucide-react';

const AcademicExperienceCard = ({
    experience,
}: {
    experience: AcademicExperience;
}) => {
    const { language } = useLanguage();
    const hasResigned = experience.resignation_date !== null;

    const getStatusColor = () => {
        const status = experience.employment_status?.name?.toLowerCase();
        if (status === 'active')
            return 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400';
        if (status === 'resigned')
            return 'bg-ash-100 dark:bg-ash-700 text-ash-700 dark:text-ash-400';
        return 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400';
    };

    return (
        <div className="border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-ash-100 dark:border-ash-700">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <BookMarked className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100">
                            {experience.position ||
                                experience.academic_rank?.name ||
                                t('Academic Position')}
                        </h3>
                        <span
                            className={`px-2.5 py-1 text-xs rounded-full font-medium ${getStatusColor()}`}
                        >
                            {experience.employment_status?.name || '-'}
                        </span>
                    </div>

                    <p className="text-base font-medium text-ash-800 dark:text-ash-200 mb-2">
                        {experience.institution?.name}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-ash-600 dark:text-ash-400 flex-wrap">
                        <span className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            {experience.section?.name || '-'}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {experience.city?.name || '-'}
                        </span>
                        {experience.employment_number && (
                            <span className="text-ash-500 dark:text-ash-500">
                                #{experience.employment_number}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                {/* Column 1: Academic Information */}
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Academic Rank')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.academic_rank?.name || '-'}
                        </p>
                    </div>

                    {experience.professional_rank && (
                        <div>
                            <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Professional Rank')}
                            </label>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {experience.professional_rank.name}
                            </p>
                        </div>
                    )}

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Major')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.major?.name || '-'}
                        </p>
                    </div>

                    {experience.minor && (
                        <div>
                            <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Minor')}
                            </label>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {experience.minor.name}
                            </p>
                        </div>
                    )}
                </div>

                {/* Column 2: Employment Details */}
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {t('Hiring Date')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {dateFormatter(experience.hiring_date, language)}
                        </p>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {t('Joining Date')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {dateFormatter(experience.joining_date, language)}
                        </p>
                    </div>

                    {hasResigned && (
                        <div>
                            <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {t('Resignation Date')}
                            </label>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {dateFormatter(
                                    experience.resignation_date,
                                    language
                                )}
                            </p>
                        </div>
                    )}

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Appointment Type')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.appointment_type?.name || '-'}
                        </p>
                    </div>
                </div>

                {/* Column 3: Additional Details */}
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Job Nature')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.job_nature?.name || '-'}
                        </p>
                    </div>

                    {experience.accommodation_status && (
                        <div>
                            <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <Home className="w-3 h-3" />
                                {t('Accommodation')}
                            </label>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {experience.accommodation_status.name}
                            </p>
                        </div>
                    )}

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Duration')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {dateFormatter(experience.joining_date, language)} -{' '}
                            {hasResigned
                                ? dateFormatter(
                                      experience.resignation_date,
                                      language
                                  )
                                : 'Present'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Tasks Section - Full Width */}
            {experience.tasks && (
                <div className="mt-5 pt-5 border-t border-ash-100 dark:border-ash-700">
                    <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                        <FileText className="w-3.5 h-3.5" />
                        {t('Responsibilities & Tasks')}
                    </label>
                    <p className="text-sm text-ash-900 dark:text-ash-100 leading-relaxed">
                        {experience.tasks}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AcademicExperienceCard;
