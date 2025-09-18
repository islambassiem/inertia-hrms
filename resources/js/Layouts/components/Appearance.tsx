import { useAppearance } from '@/hooks/useAppearance';
import { useClickOutSide } from '@/hooks/useClickOutside';
import { t } from 'i18next';
import { ChevronDown, Monitor, Moon, Sun } from 'lucide-react';
import { memo, useRef } from 'react';

interface ApperanceProps {
    isActive: boolean;
    onShow: () => void;
}
const Appearance = ({ isActive, onShow }: ApperanceProps) => {
    const { appearance, updateAppearance } = useAppearance();

    const appearances = {
        light: { label: 'Light', icon: Sun },
        dark: { label: 'Dark', icon: Moon },
        system: { label: 'System', icon: Monitor },
    } as const;

    const menuRef = useRef<HTMLDivElement>(null);

    type Appearance = keyof typeof appearances;
    type AppearanceConfig = (typeof appearances)[Appearance];

    const currentAppearance = appearances[appearance];

    useClickOutSide(menuRef, isActive, onShow);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => {
                    onShow();
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors "
            >
                <currentAppearance.icon className="h-4 w-4" />
                <span className="hidden md:inline capitalize">
                    {t(
                        appearance.slice(0, 1).toUpperCase() +
                            appearance.slice(1)
                    )}
                </span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {isActive && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-40 bg-gray-50 dark:bg-gray-800 rounded-md shadow-xl z-50">
                    <div className="py-1">
                        {(
                            Object.entries(appearances) as [
                                Appearance,
                                AppearanceConfig,
                            ][]
                        ).map(([mode, config]) => {
                            const IconComponent = config.icon;
                            return (
                                <button
                                    key={mode}
                                    onClick={() => {
                                        updateAppearance(mode);
                                        onShow();
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                        mode === appearance
                                            ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                                            : 'text-gray-700 dark:text-gray-200'
                                    }`}
                                >
                                    <IconComponent className="h-4 w-4" />
                                    <span>{t(config.label)}</span>
                                    {mode === appearance && (
                                        <div className="ms-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(Appearance);
