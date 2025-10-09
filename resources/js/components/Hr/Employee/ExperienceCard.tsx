import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { Experience } from '@/types/hr';
import { t } from 'i18next';
import {
    Briefcase,
    Building2,
    Calendar,
    FileText,
    Globe,
    Layers,
    MapPin,
} from 'lucide-react';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    const { language } = useLanguage();
    return (
        <div className="border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-ash-100 dark:border-ash-700">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100">
                            {experience.profession ||
                                t('Professional Position')}
                        </h3>
                    </div>

                    <p className="text-base font-medium text-ash-800 dark:text-ash-200 mb-2">
                        {experience.organization_name || '-'}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-ash-600 dark:text-ash-400 flex-wrap">
                        {(experience.city || experience.country) && (
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                {[experience.city, experience.country?.name]
                                    .filter(Boolean)
                                    .join(', ')}
                            </span>
                        )}
                        {experience.department && (
                            <span className="flex items-center gap-1.5">
                                <Building2 className="w-4 h-4" />
                                {experience.department}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                {/* Column 1: Organization Details */}
                <div className="space-y-4">
                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Organization')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.organization_name || '-'}
                        </p>
                    </div>

                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Department')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.department || '-'}
                        </p>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Layers className="w-3 h-3" />
                            {t('Section')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.section || '-'}
                        </p>
                    </div>
                </div>

                {/* Column 2: Location */}
                <div className="space-y-4">
                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {t('City')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.city || '-'}
                        </p>
                    </div>

                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            {t('Country')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {experience.country?.name || '-'}
                        </p>
                    </div>
                </div>

                {/* Column 3: Duration */}
                <div className="space-y-4">
                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {t('Joining Date')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {dateFormatter(experience.start_date, language)}
                        </p>
                    </div>

                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {t('Resignation Date')}
                        </div>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {dateFormatter(experience.end_date, language)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Functional Tasks Section - Full Width */}
            {experience.functional_tasks && (
                <div className="mt-5 pt-5 border-t border-ash-100 dark:border-ash-700">
                    <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                        <FileText className="w-3.5 h-3.5" />
                        {t('Responsibilities & Tasks')}
                    </div>
                    <p className="text-sm text-ash-900 dark:text-ash-100 leading-relaxed">
                        {experience.functional_tasks}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExperienceCard;
