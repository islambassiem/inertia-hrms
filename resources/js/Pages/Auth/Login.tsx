import AppLayout from '@/Layouts/AppLayout';
import { t } from 'i18next';
import React from 'react';

const Login = () => {
    return (
        <AppLayout>
            <div>{t('Manage your department and subordinates')}</div>
        </AppLayout>
    );
};

export default Login;
