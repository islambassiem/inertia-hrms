import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

const Button = ({
    type = 'button',
    children,
    className,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={cn(
                `flex items-center justify-center gap-2
                py-2 px-4 rounded-lg
                transition-colors duration-300
                color-text cursor-pointer
                disabled:opacity-30 disabled:cursor-not-allowed`,
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
