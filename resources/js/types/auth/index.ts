import React from 'react';
interface Card {
    key: string;
    role: string;
    title: string;
    subtitle: string;
    href: string;
    icon: React.ReactNode;
    color: string;
}
export interface CardProps {
    card: Card;
}

export type AuthUser = {
    auth: {
        data: {
            email: string;
            empid: string;
            employee_id: string;
            image: string;
            name_ar: string;
            name_en: string;
            permissions: string[];
            roles: string[];
            user_id: number;
        };
    };
};
