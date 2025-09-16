import { PageProps as InertiaPageProps } from '@inertiajs/core';

export interface PageProps extends InertiaPageProps {
    locale: 'ar' | 'en';
}

export type Language = 'ar' | 'en';
