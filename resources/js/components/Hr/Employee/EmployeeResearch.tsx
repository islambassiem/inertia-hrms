import EmployeeContext from '@/contexts/EmployeeContext';
import { useContext } from 'react';
import ResearchCard from './ResearchCard';
import { Binoculars } from 'lucide-react';
import NoRecords from '@/components/ui/NoRecords';
import { t } from 'i18next';

const EmployeeResearch = () => {
    const employee = useContext(EmployeeContext);
    console.log(employee);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-ash-900 dark:text-ash-100 mb-2">
                            {t('Research & Publications')}
                        </h2>
                        <p className="text-ash-600 dark:text-ash-400">
                            {t(
                                'Academic publications, research papers, and scholarly work'
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {employee.data.research.length > 0 ? (
                <div className="space-y-4">
                    {employee.data.research.map((item) => (
                        <ResearchCard key={item.id} research={item} />
                    ))}
                </div>
            ) : (
                <NoRecords
                    icon={Binoculars}
                    title={t('No research publications found.')}
                    body={t(
                        'This employee has no recorded research or publications.'
                    )}
                />
            )}
        </div>
    );
};

export default EmployeeResearch;
