import React, { useState } from 'react';

import Language from './components/Language';
import Appearance from './components/Appearance';
import Logo from './components/Logo';

const Navbar = ({ children }: { children: React.ReactNode }) => {
    const height = 90;
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleShowMenu = (index: number) => {
        setActiveIndex(index);

        if (index === activeIndex) {
            setActiveIndex(-1);
        }
    };

    return (
        <>
            <nav
                className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm h-[${height}px]`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
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
                        </div>
                    </div>
                </div>
            </nav>
            <main className={`p-6 h-[calc(100vh-${height}px)]`}>
                {children}
            </main>
        </>
    );
};

export default Navbar;
