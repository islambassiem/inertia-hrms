import React, { useEffect } from 'react';

export function useClickOutSide<T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    active: boolean,
    handler: () => void,
    closeOnEscape: boolean = true
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                handler();
            }
        }

        if (active) {
            document.addEventListener('mousedown', handleClickOutside);
            if (closeOnEscape) {
                document.addEventListener('keydown', handleKeyDown);
            }
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [ref, handler, active, closeOnEscape]);
}
