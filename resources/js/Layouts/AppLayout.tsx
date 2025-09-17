import React, { useState } from 'react';

import Language from './components/Language';
import Appearance from './components/Appearance';
import Logo from './components/Logo';
import Profile from './components/Profile';
import { usePage } from '@inertiajs/react';
import { AuthUser } from '@/types/auth';

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const height = 80;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { auth } = usePage<AuthUser>().props;
    const handleShowMenu = (index: number) => {
        setActiveIndex(index);

        if (index === activeIndex) {
            setActiveIndex(null);
        }
    };
    return (
        <>
            <nav
                className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm`}
                style={{ height }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full gap-5">
                        <Logo />
                        {/* {auth && (
                            <div className="flex-1 flex gap-4">
                                <h1 className="text-primary nav-item">
                                    <Link href={'/home'}>
                                        {t('My Account')}
                                    </Link>
                                </h1>
                                {auth.data.roles.includes('head') && (
                                    <h1 className="text-primary nav-item">
                                        {t('Head')}
                                    </h1>
                                )}
                                {auth.data.roles.includes('hr') && (
                                    <h1 className="text-primary nav-item">
                                        {t('HR')}
                                    </h1>
                                )}
                            </div>
                        )} */}
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
            </main>
        </>
    );
};

export default Navbar;
