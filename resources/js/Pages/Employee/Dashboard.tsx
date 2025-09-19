import Drawer from '@/components/ui/Drawer';
import { t } from 'i18next';
import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppLayout>
            <button
                onClick={() => setOpen(true)}
                className="text-gray-700 dark:text-gray-100"
            >
                {t('Logout')}
            </button>
            <Drawer
                onClose={() => {
                    setOpen(false);
                }}
                onAction={() => {
                    console.log('action');
                    setOpen(false);
                }}
                open={open}
                title={t('Employees Filter')}
                width={500}
            >
                <button
                    className="bg-blue-400 p-2 border"
                    onClick={() => console.log('cliked')}
                >
                    Click me
                </button>
            </Drawer>
        </AppLayout>
    );
};

export default Dashboard;
