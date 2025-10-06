import React from 'react';

const InfoField = ({
    icon: Icon,
    label,
    value,
    children,
}: {
    icon: any;
    label: string;
    value?: string | null;
    children?: React.ReactNode;
}) => {
    return (
        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-ash-50 dark:hover:bg-ash-700/50 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ash-500 dark:text-ash-400 mb-1">
                    {label}
                </p>
                <p className="text-base text-ash-900 dark:text-ash-100 break-words">
                    {value || children || '-'}
                </p>
            </div>
        </div>
    );
};

export default InfoField;
