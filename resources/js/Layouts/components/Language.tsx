import SA from '@/components/Icons/SA';
import UK from '@/components/Icons/UK';
import { useClickOutSide } from '@/hooks/useClickOutside';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronDown } from 'lucide-react';
import { memo, useRef } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

interface LanguageProps {
    isActive: boolean;
    onShow: () => void;
}

const Language = ({ isActive, onShow }: LanguageProps) => {
    const { language, setLanguage } = useLanguage();
    const menuRef = useRef<HTMLDivElement>(null);

    const languages = {
        en: { label: 'English', icon: <UK /> },
        ar: { label: 'العربية', icon: <SA /> },
    } as const;

    const currentLanguage = languages[language];

    useClickOutSide(menuRef, isActive, onShow);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => onShow()}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium"
            >
                <span className="hidden sm:inline">{currentLanguage.icon}</span>
                <span className="hidden md:inline">
                    {currentLanguage.label}
                </span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {isActive && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 rounded-md shadow-lg ring-opacity-5 z-50">
                    <div className="py-1">
                        {Object.entries(languages).map(([code, lang]) => (
                            <button
                                key={code}
                                onClick={() => {
                                    if (code !== language) {
                                        setLanguage();
                                    }
                                    onShow();
                                }}
                                className={`font-fustat w-full text-left px-4 py-2 text-sm flex items-center space-x-3 bg`}
                            >
                                <span className="text-lg">{lang.icon}</span>
                                <span>{lang.label}</span>
                                {code === language && (
                                    <div className="ms-auto">
                                        <IoMdCheckmark className="text-primary-900 dark:text-primary-500" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(Language);
