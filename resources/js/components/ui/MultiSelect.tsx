import { memo, useEffect, useRef, useState } from 'react';

import { t } from 'i18next';

import { GoChevronDown } from 'react-icons/go';
// import { VscClearAll } from 'react-icons/vsc';
import { IoCloseOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
// import ToolTip from './Tooltip';

interface Item {
    id: string | number;
    name: string;
}

interface MultiSelectProps {
    items: Item[];
    selected: string[];
    // eslint-disable-next-line no-unused-vars
    onChange: (selected: string[]) => void;
    name: string;
    direction: 'start' | 'end';
    title: string;
}

const MultiSelect = ({
    items,
    selected,
    onChange,
    title,
    name = 'items',
    direction = 'start',
}: MultiSelectProps) => {
    const wapperRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const handleSelectAll = (checked: boolean) => {
        onChange(checked ? items.map((item) => String(item.id)) : []);
    };

    const handleToggle = (id: string) => {
        if (selected.includes(id)) {
            onChange(selected.filter((s) => s !== id));
        } else {
            onChange([...selected, id]);
        }
    };

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                wapperRef.current &&
                !wapperRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const position =
        direction === 'start'
            ? 'left-0 rtl:left-auto rtl:right-0'
            : 'right-0 rtl:right-auto rtl:left-0';

    return (
        <section className="flex-1 flex flex-col">
            <h3 className="font-bold mb-2">{title}</h3>
            <section ref={wapperRef} className="w-full relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`border border-primary-300 ring-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500
                    focus:border-transparent  rounded-md px-4 py-2 cursor-pointer select-none flex justify-between items-center w-full`}
                >
                    <span>
                        {selected.length > 0
                            ? `${selected.length} ${t('Selected')}`
                            : t('Select')}
                    </span>
                    <GoChevronDown
                        className={`transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
                {isOpen && (
                    <div
                        className={`absolute z-10 mt-1 border bg-ash-100 dark:bg-ash-800 rounded-lg shadow-lg overflow-hidden ${position}`}
                    >
                        <div className="p-3 border-b flex items-center gap-2 bg-ash-50 dark:bg-ash-700">
                            <input
                                type="checkbox"
                                id={`${name}-select-all`}
                                checked={
                                    selected.length === items.length &&
                                    items.length > 0
                                }
                                onChange={(e) =>
                                    handleSelectAll(e.target.checked)
                                }
                                className="accent-primary-500 cursor-pointer"
                            />

                            <div
                                className="flex flex-1 items-center rounded-md border px-2
                            bg-ash-100 dark:bg-ash-800
                            focus-within:ring-1 focus-within:ring-primary-500
                            transition-all duration-300 ease-in-out
                            focus-within:shadow-md focus-within:scale-[1.02]"
                            >
                                <input
                                    type="text"
                                    className="flex-1 outline-none bg-transparent
                                placeholder:text-ash-400 dark:placeholder:text-ash-300
                                text-sm transition-all duration-300 ease-in-out
                                focus:pl-1"
                                    placeholder={t('Search')}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <CiSearch className="text-ash-400 transition-colors duration-300 group-focus-within:text-primary-500" />
                            </div>

                            <IoCloseOutline
                                className="cursor-pointer text-xl text-ash-500 hover:text-ash-700 dark:text-ash-300 dark:hover:text-ash-100"
                                onClick={() => setSearch('')}
                            />
                        </div>

                        {/* Items */}
                        <ul className="max-h-48 overflow-y-auto divide-y divide-ash-100 dark:divide-ash-700">
                            {items
                                .filter((item) =>
                                    item.name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((item) => {
                                    const idStr = String(item.id);
                                    const inputId = `${name}-${idStr}`;
                                    return (
                                        <li key={idStr}>
                                            <label
                                                htmlFor={inputId}
                                                className="relative flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary-200 hover:text-ash-800 text-sm"
                                            >
                                                <input
                                                    id={inputId}
                                                    type="checkbox"
                                                    name={`${name}[]`}
                                                    value={idStr}
                                                    checked={selected.includes(
                                                        idStr
                                                    )}
                                                    onChange={() =>
                                                        handleToggle(idStr)
                                                    }
                                                    className="accent-primary-500 cursor-pointer hover:accent-primary-700"
                                                />
                                                {item.name}
                                            </label>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                )}
            </section>
        </section>
    );
};

export default memo(MultiSelect);
