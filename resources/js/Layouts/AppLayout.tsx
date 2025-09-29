import React, { useState } from 'react';

import Language from './components/Language';
import Appearance from './components/Appearance';
import Logo from './components/Logo';
import Profile from './components/Profile';
import { usePage } from '@inertiajs/react';
import { AuthUser } from '@/types/auth';
import { ToastContainer } from 'react-toastify';
import { useLanguage } from '@/hooks/useLanguage';
import { useAppearance } from '@/hooks/useAppearance';

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const height = 80;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { language } = useLanguage();
    const { theme } = useAppearance();
    const { auth } = usePage<AuthUser>().props;
    const handleShowMenu = (index: number) => {
        setActiveIndex(index);

        if (index === activeIndex) {
            setActiveIndex(null);
        }
    };
    return (
        <>
            <nav className={`border-b shadow-sm`} style={{ height }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full gap-5">
                        <Logo />
                        <div className="flex items-center space-x-4">
                            <Language
                                isActive={activeIndex === 0}
                                onShow={() => handleShowMenu(0)}
                            />
                            <Appearance
                                isActive={activeIndex === 1}
                                onShow={() => handleShowMenu(1)}
                            />
                            {auth && (
                                <Profile
                                    isActive={activeIndex === 2}
                                    onShow={() => handleShowMenu(2)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <main
                className={`p-6`}
                style={{ height: `calc(100vh - ${height}px)` }}
            >
                {children}
                <ToastContainer
                    position={language === 'ar' ? 'top-left' : 'top-right'}
                    rtl={language === 'ar'}
                    newestOnTop
                    theme={theme}
                    autoClose={2000}
                />
            </main>
        </>
    );
};

export default Navbar;
