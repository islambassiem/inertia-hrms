import React from 'react';
interface FloatingLableProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type?: string;
    placeholder: string;
}
const FloatingLable = ({
    id,
    type = 'text',
    placeholder,
    ...props
}: FloatingLableProps) => {
    return (
        <div className="relative w-full mt-4">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                className="w-full peer placeholder-transparent text-primary placeholder:text-primary
                py-1.5 border-b border-b-gray-600 dark:border-b-gray-200
                focus:outline-none"
                {...props}
            />
            <label
                htmlFor={id}
                className="block absolute left-0 -top-4 rtl:left-auto rtl:right-0 text-base
                transition-all duration-300
                peer-focus:-top-4
                peer-placeholder-shown:top-1.5
                peer-placeholder-shown:text-base
                peer-focus:text-sm
                text-gray-600 dark:text-gray-300
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:dark:text-gray-200
                peer-focus:text-text-muted
            "
            >
                {placeholder}
            </label>
        </div>
    );
};

export default FloatingLable;
