import { t } from 'i18next';
import { Search } from 'lucide-react';
import React from 'react';

const SearchInput = ({
    searchTerm,
    handleSearch,
    placeholder,
}: {
    searchTerm: string;
    // eslint-disable-next-line no-unused-vars
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}) => {
    return (
        // <section className="relative flex items-center gap-2">
        //     <input
        //         type="search"
        //         placeholder={t('Search for an employee')}
        //         className="border border-primary-300 rounded-md p-2 focus:outline-none focus:border-primary-500
        //             placeholder:relative placeholder:right-8
        //         "
        //         value={searchTerm}
        //         onChange={handleSearch}
        //     />
        //     <Search className="absolute right-3" />
        // </section>
        <section>
            <label
                htmlFor="default-search"
                className="text-sm font-medium text-ash-900 sr-only dark:text-ash-100"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="text-primary-500" />
                </div>
                <input
                    type="search"
                    id="default-search"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="block w-full px-2 py-2.5 ps-10 text-sm text-primary-500 border border-primary-300 rounded-lg bg-ash-50 focus:ring-primary-500 focus:border-primary-500 focus:outline-none dark:bg-ash-700 dark:border-ash-600 dark:placeholder-ash-400 dark:text-ash-100 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={placeholder || t('Search')}
                />
            </div>
        </section>
    );
};

export default SearchInput;
