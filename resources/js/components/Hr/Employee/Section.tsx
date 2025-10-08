import React from 'react';

interface SectionProps {
    title: string;
    body: string | null;
    children: React.ReactNode;
}
const Section = ({ title, body, children }: SectionProps) => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-ash-900 dark:text-ash-100 mb-2">
                    {title}
                </h2>
                <p className="text-ash-700 dark:text-ash-400">{body}</p>
            </div>
            {children}
        </div>
    );
};

export default Section;
