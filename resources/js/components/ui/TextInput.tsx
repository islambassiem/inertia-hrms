import { AlertCircle } from 'lucide-react';
import React, { ComponentPropsWithoutRef } from 'react';

interface TextInputProps
    extends Omit<ComponentPropsWithoutRef<'input'>, 'value'> {
    icon?: React.ElementType;
    label: string;
    error?: string;
    value: string | null;
}

const TextInput = React.memo(
    ({
        icon: Icon,
        label,
        name,
        value,
        onChange,
        type = 'text',
        required = false,
        error,
        placeholder = '',
        ...inputProps
    }: TextInputProps) => {
        return (
            <div className="space-y-2">
                <label
                    htmlFor={name}
                    className="flex items-center gap-2 text-sm font-medium text-ash-700 dark:text-ash-300"
                >
                    {Icon && (
                        <Icon className="w-4 h-4 text-ash-500 dark:text-ash-400" />
                    )}
                    {label}
                    {required && <span className="text-danger-500">*</span>}
                </label>

                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value ?? ''}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full px-4 py-2.5 rounded-lg border transition-colors
                            ${
                                error
                                    ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-500'
                                    : 'border-ash-300 dark:border-ash-600 focus:border-primary-500 dark:focus:border-primary-500'
                            }
                            bg-ash-50 dark:bg-ash-700 text-ash-900 dark:text-ash-100 placeholder-ash-400
                            dark:placeholder-ash-500 focus:outline-none`}
                    {...inputProps}
                />

                {error && (
                    <div className="flex items-center gap-1 text-sm text-danger-600 dark:text-danger-400">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                    </div>
                )}
            </div>
        );
    }
);

TextInput.displayName = 'TextInput';
export default TextInput;
