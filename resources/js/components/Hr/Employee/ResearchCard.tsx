import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { Research } from '@/types/hr';
import { t } from 'i18next';
import {
    Activity,
    AlertCircle,
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    FileText,
    Globe,
    Hash,
    Link2,
    MapPin,
    Tag,
} from 'lucide-react';

const ResearchCard = ({ research }: { research: Research }) => {
    const { language } = useLanguage();

    const getStatusColor = () => {
        const status = research.status?.name?.toLowerCase();
        if (status === 'published')
            return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
        if (status === 'in press')
            return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
        if (status === 'draft')
            return 'bg-ash-100 dark:bg-ash-700 text-ash-700 dark:text-ash-400';
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
    };

    const getStatusIcon = () => {
        const status = research.status?.name?.toLowerCase();
        if (status === 'published') return CheckCircle;
        if (status === 'in press') return Clock;
        if (status === 'draft') return FileText;
        return AlertCircle;
    };
    const StatusIcon = getStatusIcon();
    return (
        <div className="border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-ash-100 dark:border-ash-700">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs rounded-full font-medium">
                            {research.type?.name || '-'}
                        </span>
                        <span
                            className={`px-2.5 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${getStatusColor()}`}
                        >
                            <StatusIcon className="w-3 h-3" />
                            {research.status?.name || '-'}
                        </span>
                        {research.language && (
                            <span className="px-2.5 py-1 bg-ash-100 dark:bg-ash-700 text-ash-700 dark:text-ash-300 text-xs rounded-full font-medium">
                                {research.language.name}
                            </span>
                        )}
                    </div>

                    <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100 mb-2 leading-snug">
                        {research.title || '-'}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ash-600 dark:text-ash-400">
                        {research.magazine && (
                            <span className="flex items-center gap-1.5">
                                <FileText className="w-4 h-4" />
                                {research.magazine}
                            </span>
                        )}
                        {research.publication_date && (
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {dateFormatter(
                                    research.publication_date,
                                    language
                                )}
                            </span>
                        )}
                        {research.domain && (
                            <span className="flex items-center gap-1.5">
                                <Activity className="w-4 h-4" />
                                {research.domain.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 mb-5">
                {/* Column 1: Publication Details */}
                <div className="space-y-3">
                    {research.publisher && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Publisher')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.publisher}
                            </p>
                        </div>
                    )}

                    {research.edition && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Edition')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.edition}
                            </p>
                        </div>
                    )}

                    {research.isbn && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                ISBN
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100 font-mono">
                                {research.isbn}
                            </p>
                        </div>
                    )}

                    {research.pages_number && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <Hash className="w-3 h-3" />
                                {t('Pages')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.pages_number}
                            </p>
                        </div>
                    )}
                </div>

                {/* Column 2: Classification */}
                <div className="space-y-3">
                    {research.nature && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Research Nature')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.nature.name}
                            </p>
                        </div>
                    )}

                    {research.progress && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Progress')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.progress.name}
                            </p>
                        </div>
                    )}

                    {research.citation && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Citation Style')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.citation.name}
                            </p>
                        </div>
                    )}

                    {research.publication_location && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {t('Location')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.publication_location}
                            </p>
                        </div>
                    )}
                </div>

                {/* Column 3: Links & Access */}
                <div className="space-y-3">
                    {research.publishing_url && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                {t('URL')}
                            </div>
                            <a
                                href={research.publishing_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary-600 dark:text-primary-400 hover:underline break-all flex items-center gap-1"
                            >
                                <Link2 className="w-3 h-3 flex-shrink-0" />
                                {t('View Publication')}
                            </a>
                        </div>
                    )}

                    {research.domain && (
                        <div>
                            <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-1">
                                {t('Domain')}
                            </div>
                            <p className="text-sm text-ash-900 dark:text-ash-100">
                                {research.domain.name}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Summary Section */}
            {research.summary && (
                <div className="mb-5 pb-5 border-b border-ash-100 dark:border-ash-700">
                    <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-2">
                        {t('Summary')}
                    </div>
                    <p className="text-sm text-ash-900 dark:text-ash-100 leading-relaxed">
                        {research.summary}
                    </p>
                </div>
            )}

            {/* Keywords */}
            {research.key_words && (
                <div>
                    <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                        <Tag className="w-3 h-3" />
                        {t('Keywords')}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {research.key_words.split(',').map((keyword, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 bg-ash-100 dark:bg-ash-700 text-ash-700 dark:text-ash-300 text-xs rounded-full"
                            >
                                {keyword.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResearchCard;
