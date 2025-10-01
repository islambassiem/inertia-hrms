import Button from '@/components/ui/Button';
import SearchInput from '@/components/ui/SearchInput';
import Select from '@/components/ui/Select';
import { HeaderProps } from '@/types/hr';
import { t } from 'i18next';
import { Funnel } from 'lucide-react';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';

const Header = ({
    handleFilter,
    handleExport,
    formData,
    handlePerPageChange,
    handleSearch,
    searchInput,
}: HeaderProps) => {
    return (
        <div className="rounded-2xl shadow-lg border border-ash-100 p-6 m-5 mt-0">
            {/* Header title section (optional) */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text">
                    {t('Employees List')}
                </h2>
                <div className="flex items-center gap-3">
                    <Button onClick={handleFilter} className="btn-primary ">
                        <Funnel />
                        {t('Filter')}
                    </Button>
                    <Button
                        onClick={(e) => handleExport(e)}
                        className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
                    >
                        <PiMicrosoftExcelLogoFill className="w-4 h-4" />
                        {t('Export')}
                    </Button>
                </div>
            </div>

            {/* Search and pagination row */}
            <div className="flex flex-col justify-between sm:flex-row items-stretch sm:items-center gap-4">
                <div className="md:w-xl">
                    <SearchInput
                        searchTerm={searchInput}
                        handleSearch={handleSearch}
                        placeholder={t('Search by Name, ID, Employee ID')}
                    />
                </div>
                <div className="flex items-center gap-3 bg-ash-50 rounded-lg px-4 py-3 surface">
                    <span className="text-sm font-medium text-ash-600 flex-1">
                        {t('Employees per page')}
                    </span>
                    <span className="inline-block w-24">
                        <Select
                            items={[
                                { id: '5', name: '5' },
                                { id: '10', name: '10' },
                                { id: '15', name: '15' },
                                { id: '20', name: '20' },
                                { id: '50', name: '50' },
                                { id: '100', name: '100' },
                            ]}
                            checked={formData.perPage}
                            onChange={handlePerPageChange}
                            name="perPage"
                            direction="end"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
