import Button from '@/components/ui/Button';
import { t } from 'i18next';
import { SquarePen } from 'lucide-react';
import React from 'react';

interface SectionProps {
    title: string;
    body: string | null;
    editable?: boolean;
    onButtonClick?: () => void | undefined;
    children: React.ReactNode;
}
const Section = ({
    title,
    body,
    editable = true,
    onButtonClick,
    children,
}: SectionProps) => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-ash-900 dark:text-ash-100 mb-2">
                        {title}
                    </h2>
                    <p className="text-ash-700 dark:text-ash-400">{body}</p>
                </div>
                {editable && (
                    <Button className="btn-primary" onClick={onButtonClick}>
                        <SquarePen /> {t('Edit')}
                    </Button>
                )}
            </div>
            {children}
        </div>
    );
};

export default Section;
