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
            </main>
        </>
    );
};

export default Navbar;
