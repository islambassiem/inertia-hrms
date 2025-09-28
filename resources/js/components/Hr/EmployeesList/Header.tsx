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
        <>
            <div className="mb-6">
                {/* Top row - Actions */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Button onClick={handleFilter} className="btn-primary ">
                            <Funnel />
                            {t('Filter')}
                        </Button>
                        <Button
                            onClick={(e) => handleExport(e)}
                            className="btn-primary"
                        >
                            <PiMicrosoftExcelLogoFill />
                            {t('Export')}
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{t('Display')}</span>
                        <div className="w-24">
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
                        </div>
                        <span>{t('employee per page')}</span>
                    </div>
                </div>

                {/* Bottom row - Search with enhanced styling */}
                <div className="relative">
                    <div className="max-w-md">
                        <SearchInput
                            searchTerm={searchInput}
                            handleSearch={handleSearch}
                            placeholder={t('Name, ID, Email')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
