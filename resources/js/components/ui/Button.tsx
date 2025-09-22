import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    type = 'button',
    children,
    className,
    disabled = false,
    onClick,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={cn(
                `flex items-center justify-center gap-2
                py-2 px-4 rounded-lg
                transition-colors duration-300
                cursor-pointer
                disabled:opacity-30 disabled:cursor-not-allowed`,
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
