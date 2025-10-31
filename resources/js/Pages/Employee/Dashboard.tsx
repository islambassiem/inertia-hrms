import Drawer from '@/components/ui/Drawer';
import { t } from 'i18next';
import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppLayout>
            <button onClick={() => setOpen(true)}>
                {t('Employee Dashboard')}
            </button>
            <Drawer
                onClose={() => {
                    setOpen(false);
                }}
                onAction={() => {
                    setOpen(false);
                }}
                open={open}
                title={t('Employees Filter')}
                width={500}
            >
                <button className="p-2 border" onClick={() => alert('')}>
                    Click me
                </button>
            </Drawer>
        </AppLayout>
    );
};

export default Dashboard;
