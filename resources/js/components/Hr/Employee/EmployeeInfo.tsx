import BasicInfo from '@/components/Hr/Employee/BasicInfo';
import Identification from '@/components/Hr/Employee/NationalID';
import Passport from '@/components/Hr/Employee/Passport';
import Bank from '@/components/Hr/Employee/EmployeeBank';
import Address from '@/components/Hr/Employee/EmployeeNationalAddress';
import Contacts from '@/components/Hr/Employee/EmployeeEmergencyContacts';
import { IdCard, Landmark, MapPinHouse } from 'lucide-react';
import { t } from 'i18next';
import { useState } from 'react';
import { GrInfo } from 'react-icons/gr';
import { LiaPassportSolid } from 'react-icons/lia';
import { MdOutlineContactEmergency } from 'react-icons/md';

const EmployeeInfo = () => {
    const tabs = [
        {
            key: 'basic',
            label: t('Basic Information'),
            icon: GrInfo,
            content: <BasicInfo />,
        },
        {
            key: 'national-id',
            label: t('National ID'),
            icon: IdCard,
            content: <Identification />,
        },
        {
            key: 'passport',
            label: t('Passport'),
            icon: LiaPassportSolid,
            content: <Passport />,
        },
        {
            key: 'bank',
            label: t('Bank Information'),
            icon: Landmark,
            content: <Bank />,
        },
        {
            key: 'address',
            label: t('National Address'),
            icon: MapPinHouse,
            content: <Address />,
        },
        {
            key: 'contacts',
            label: t('Emergency Contacts'),
            icon: MdOutlineContactEmergency,
            content: <Contacts />,
        },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].key);
    return (
        <>
            <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                className={`flex items-center gap-2 py-4 px-6 text-sm font-medium
                                    hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap cursor-pointer
                                    ${
                                        activeTab === tab.key
                                            ? 'text-primary-600 dark:text-primary-400 border-b border-b-primary-500'
                                            : 'text-gray-900 dark:text-gray-100'
                                    }`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div>
                {tabs.map((tab) =>
                    activeTab === tab.key ? (
                        <div key={tab.key}>{tab.content}</div>
                    ) : null
                )}
            </div>
        </>
    );
};

export default EmployeeInfo;
