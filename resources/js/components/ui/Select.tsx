import { memo, useEffect, useRef, useState } from 'react';
import { t } from 'i18next';
import { GoChevronDown } from 'react-icons/go';
import { IoCloseOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { Resource } from '@/types/hr';

interface SelectProps {
    items: Resource[];
    checked: number | null;
    // eslint-disable-next-line no-unused-vars
    onChange: (checked: number) => void;
    name?: string;
    direction?: 'start' | 'end';
    title?: string;
    required?: boolean;
    searchable?: boolean;
}

const Select = ({
    items,
    checked,
    onChange,
    name = 'items',
    direction = 'start',
    title,
    required = false,
    searchable = true,
}: SelectProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const selectedItem = items.find((item) => item.id === checked);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (id: number) => {
        onChange(id);
        setIsOpen(false);
    };

    const position =
        direction === 'start'
            ? 'left-0 rtl:left-auto rtl:right-0'
            : 'right-0 rtl:right-auto rtl:left-0';

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div ref={wrapperRef} className="w-full relative">
            {/* Label */}
            {title && (
                <label className="flex gap-2 font-semibold text-ash-800 dark:text-ash-100 mb-1">
                    {title}
                    {required && <span className="text-danger-500">*</span>}
                </label>
            )}

            {/* Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 h-10
                    rounded-md px-4 py-2 flex justify-between items-center w-full dark:bg-ash-800 text-left"
            >
                <span className="truncate">
                    {selectedItem ? selectedItem.name : t('Select')}
                </span>
                <GoChevronDown
                    className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    className={`absolute w-full z-50 mt-1 border bg-ash-50 dark:bg-ash-800 rounded-lg shadow-lg overflow-hidden ${position}`}
                >
                    {/* Search */}
                    {searchable && (
                        <div className="p-3 border-b flex items-center gap-2 bg-ash-50 dark:bg-ash-700">
                            <div
                                className="flex flex-1 items-center rounded-md border px-2
                                    bg-ash-100 dark:bg-ash-800
                                    focus-within:ring-1 focus-within:ring-primary-500
                                    transition-all duration-300 ease-in-out"
                            >
                                <CiSearch className="text-ash-400 mr-1" />
                                <input
                                    type="text"
                                    placeholder={t('Search')}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 outline-none bg-transparent text-sm placeholder:text-ash-400 dark:placeholder:text-ash-300"
                                />
                            </div>
                            {search && (
                                <IoCloseOutline
                                    className="cursor-pointer text-xl text-ash-500 hover:text-ash-700 dark:text-ash-300 dark:hover:text-white"
                                    onClick={() => setSearch('')}
                                />
                            )}
                        </div>
                    )}

                    {/* Items */}
                    <ul className="max-h-48 overflow-y-auto divide-y divide-ash-100 dark:divide-ash-700">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => {
                                const idStr = String(item.id);
                                const isSelected = checked === item.id;
                                const inputId = `${name}-${idStr}`;

                                return (
                                    <li
                                        key={idStr}
                                        className={`transition-colors duration-200 ${
                                            isSelected
                                                ? 'bg-primary-100 text-ash-800 dark:bg-primary-500 dark:text-ash-100'
                                                : 'hover:bg-primary-100 dark:hover:bg-primary-700'
                                        }`}
                                    >
                                        <label
                                            htmlFor={inputId}
                                            className="flex items-center gap-2 px-3 py-2 cursor-pointer text-sm w-full"
                                        >
                                            <input
                                                id={inputId}
                                                type="radio"
                                                name={name}
                                                value={idStr}
                                                checked={isSelected}
                                                onChange={() =>
                                                    handleSelect(item.id)
                                                }
                                                className="accent-primary-500"
                                            />
                                            <span className="truncate">
                                                {item.name}
                                            </span>
                                        </label>
                                    </li>
                                );
                            })
                        ) : (
                            <li className="px-3 py-2 text-sm text-ash-500 text-center">
                                {t('No results found')}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default memo(Select);
