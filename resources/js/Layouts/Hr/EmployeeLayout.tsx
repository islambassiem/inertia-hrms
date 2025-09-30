import React from 'react';

const EmployeeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <nav className="flex gap-10">
                <p>Dashboard</p>
                <p>Profile</p>
                <p>Settings</p>
            </nav>
            {children}
        </section>
    );
};

export default EmployeeLayout;
