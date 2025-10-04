import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getArrayParam(name: string): Array<string> {
    const params = new URLSearchParams(window.location.search);
    const values: string[] = [];
    for (const [key, value] of params.entries()) {
        if (key.startsWith(name + '[')) {
            values.push(value);
        }
    }
    return values;
}
export function getStringParam(name: string): string {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) ?? '';
}

export function dateFormatter(
    date: string | null | undefined,
    language: string,
    fallback = '-'
): string {
    if (!date) return fallback;

    const d = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(d.getTime())) return fallback;

    return d.toLocaleDateString(language, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });
}
