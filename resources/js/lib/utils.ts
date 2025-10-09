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

export const calculateDuration = (startDate: string, endDate: string) => {
    if (!startDate) return 'N/A';

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
        return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    } else if (remainingMonths === 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
        return `${years} ${years === 1 ? 'year' : 'years'}, ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
};
