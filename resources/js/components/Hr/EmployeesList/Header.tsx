import Button from '@/components/ui/Button';
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
            <div className="flex justify-start items-center gap-4">
                <Button onClick={handleFilter} className="btn-primary">
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
                <div className="flex gap-4">
                    <div className="w-36">
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
                        />
                    </div>
                    <div>
                        <input
                            type="search"
                            className="input"
                            value={searchInput}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
