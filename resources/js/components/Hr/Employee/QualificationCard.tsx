/* eslint-disable jsx-a11y/label-has-associated-control */
import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { Qualification } from '@/types/hr';
import { t } from 'i18next';
import {
    Award,
    BookOpen,
    Building2,
    Calendar,
    CheckCircle,
    GraduationCap,
    MapPin,
} from 'lucide-react';

const QualificationCard = ({
    qualification,
}: {
    qualification: Qualification;
}) => {
    const { language } = useLanguage();
    return (
        <div className="border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-ash-100 dark:border-ash-700">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100">
                            {qualification.qualification.name || '-'}
                        </h3>
                        <div className="flex items-center gap-2">
                            {qualification.is_active && (
                                <span className="px-2.5 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-xs rounded-full font-medium">
                                    {t('Latest Qualification')}
                                </span>
                            )}
                            {qualification.is_attested && (
                                <span className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs rounded-full font-medium flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    {t('Attested')}
                                </span>
                            )}
                        </div>
                    </div>

                    <p className="text-base font-medium text-ash-800 dark:text-ash-200 mb-1">
                        {qualification.major?.name || '-'}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-ash-600 dark:text-ash-400 flex-wrap">
                        <span className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" />
                            {qualification.graduation_university || '-'}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {dateFormatter(
                                qualification.graduation_date,
                                language
                            )}
                        </span>
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                {/* Column 1 */}
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Major')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {qualification.major?.name || '-'}
                        </p>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Minor')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {qualification.minor?.name || '-'}
                        </p>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('College')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {qualification.graduation_college || '-'}
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {t('City')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {qualification.city || '-'}
                        </p>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Study Nature')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {qualification.study_nature?.name || '-'}
                        </p>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Graduation Date')}
                        </label>
                        <p className="text-sm text-ash-900 dark:text-ash-100">
                            {dateFormatter(
                                qualification.graduation_date,
                                language
                            )}
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                    {qualification.gpa && qualification.gpa_type && (
                        <div>
                            <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Grade Point Average(GPA)')}
                            </label>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {qualification.gpa} /{' '}
                                {qualification.gpa_type.name}
                            </p>
                        </div>
                    )}

                    {qualification.rating !== null && (
                        <div>
                            <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                                <Award className="w-3 h-3" />
                                {t('Rating')}
                            </label>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {qualification.rating.name || '-'}
                            </p>
                        </div>
                    )}

                    <div>
                        <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                            {t('Attestation Status')}
                        </label>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-ash-900 dark:text-ash-100">
                                {qualification.is_attested ? (
                                    <span className="text-primary-600 dark:text-primary-400">
                                        {t('Attested')}
                                    </span>
                                ) : (
                                    <span className="text-ash-500 dark:text-ash-400">
                                        {t('Not Attested')}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thesis Section - Full Width */}
            {qualification.thesis && (
                <div className="mt-5 pt-5 border-t border-ash-100 dark:border-ash-700">
                    <label className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                        <BookOpen className="w-3.5 h-3.5" />
                        Thesis
                    </label>
                    <p className="text-sm text-ash-900 dark:text-ash-100 leading-relaxed">
                        {qualification.thesis}
                    </p>
                </div>
            )}
        </div>
    );
};

export default QualificationCard;
