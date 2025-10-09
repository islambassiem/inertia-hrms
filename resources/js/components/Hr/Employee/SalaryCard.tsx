import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { Salary } from '@/types/hr';
import { t } from 'i18next';
import {
    Calendar,
    Car,
    DollarSign,
    Home,
    Package,
    Utensils,
} from 'lucide-react';

const SalaryCard = ({
    salary,
    isLatest,
}: {
    salary: Salary;
    isLatest: boolean;
}) => {
    const { language } = useLanguage();

    const formatCurrency = (amount: number) => {
        if (amount === null || amount === undefined) return null;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const allowances = [
        { label: t('Housing Allowance'), value: salary.housing, icon: Home },
        { label: t('Transportation'), value: salary.transportation, icon: Car },
        { label: t('Food'), value: salary.food, icon: Utensils },
    ].filter((item) => item.value !== null && item.value > 0);

    return (
        <div className="border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-ash-100 dark:border-ash-700">
                <div className="p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                    <DollarSign className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-2xl font-bold text-ash-900 dark:text-ash-100">
                            {formatCurrency(salary.package)}
                        </h3>
                        {isLatest && (
                            <span className="px-2.5 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-xs rounded-full font-medium">
                                {t('Current Salary')}
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-ash-600 dark:text-ash-400 mb-1">
                        {t('Total Package')}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-ash-600 dark:text-ash-400">
                        <Calendar className="w-4 h-4" />
                        <span>
                            {t('Effective from')}{' '}
                            {dateFormatter(salary.effective, language)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Salary Breakdown */}
            <div className="space-y-4">
                {/* Basic Salary - Prominent */}
                <div className="bg-ash-50 dark:bg-ash-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-ash-500 dark:text-ash-400" />
                            <div className="text-sm font-semibold text-ash-700 dark:text-ash-300">
                                {t('Basic Salary')}
                            </div>
                        </div>
                        <p className="text-lg font-bold text-ash-900 dark:text-ash-100">
                            {formatCurrency(salary.basic)}
                        </p>
                    </div>
                </div>

                {/* Allowances Grid */}
                {allowances.length > 0 && (
                    <div>
                        <div className="text-xs font-semibold text-ash-500 dark:text-ash-400 uppercase tracking-wider block mb-3">
                            {t('Allowances')}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {allowances.map((allowance) => {
                                const Icon = allowance.icon;
                                return (
                                    <div
                                        key={allowance.label}
                                        className="border border-ash-200 dark:border-ash-700 rounded-lg p-3 bg-white dark:bg-ash-800"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Icon className="w-3.5 h-3.5 text-ash-500 dark:text-ash-400" />
                                            <span className="text-xs text-ash-600 dark:text-ash-400">
                                                {allowance.label}
                                            </span>
                                        </div>
                                        <p className="text-base font-semibold text-ash-900 dark:text-ash-100">
                                            {allowance.value &&
                                                formatCurrency(allowance.value)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalaryCard;
