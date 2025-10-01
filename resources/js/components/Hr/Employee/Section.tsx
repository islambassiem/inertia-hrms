import React from 'react';

const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-ash-900 dark:text-ash-100 mb-4 pb-2 border-b-2 border-primary-500 dark:border-primary-400">
                    {title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Section;
