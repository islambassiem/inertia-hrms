import { t } from 'i18next';
import React, { memo } from 'react';

type DrawerProps = {
    title: string;
    open: boolean;
    width: number;
    children: React.ReactNode;
    onClose: () => void;
    onAction: () => void;
};

const Drawer = ({
    title,
    open,
    width,
    children,
    onClose,
    onAction,
}: DrawerProps) => {
    if (!open) return;
    return (
        <>
            <section
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                    e.key === 'Enter' || e.key === ' ' ? onClose() : null
                }
                className="fixed inset-0 bg-ash-500 opacity-65 z-50"
                onClick={onClose}
            ></section>

            <section
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                    e.key === 'Enter' || e.key === ' ' ? onClose() : null
                }
                onClick={(e) => e.stopPropagation()}
                style={{ width: width }}
                className={`fixed z-50 top-0 right-0 rtl:right-auto h-full rtl:left-0 bg-ash-100 dark:bg-ash-800 flex flex-col shadow-lg`}
            >
                <header className="h-16 flex items-center justify-between px-4 bg-ash-200 dark:bg-ash-800 text-ash-800 dark:text-ash-100 shadow-lg flex-shrink-0">
                    <div className="flex-1">{title}</div>
                    <div className="flex items-center justify-between gap-4">
                        <button
                            onClick={onAction}
                            className="ms-auto btn-primary"
                        >
                            {t('Apply')}
                        </button>
                        <button
                            onClick={onClose}
                            className="ms-auto btn-danger"
                        >
                            {t('Clear')}
                        </button>
                    </div>
                </header>
                <div className="p-4 flex-1 overflow-y-auto">{children}</div>
            </section>
        </>
    );
};

export default memo(Drawer);
