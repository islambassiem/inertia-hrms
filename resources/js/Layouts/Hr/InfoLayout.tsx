import { Link, usePage } from '@inertiajs/react';
import { t } from 'i18next';
import { IdCard, Landmark, MapPinHouse } from 'lucide-react';
import React, { useContext } from 'react';
import { GrInfo } from 'react-icons/gr';
import { LiaPassportSolid } from 'react-icons/lia';
import { MdOutlineContactEmergency } from 'react-icons/md';
import { index as info } from '@/actions/App/Http/Controllers/BasicInfoController';
import { index as nationalId } from '@/actions/App/Http/Controllers/IdentificationController';
import { index as passport } from '@/actions/App/Http/Controllers/PassportController';
import { index as bank } from '@/actions/App/Http/Controllers/BankController';
import { index as nationalAddress } from '@/actions/App/Http/Controllers/NationalddressController';
import { index as contacts } from '@/actions/App/Http/Controllers/EmergencyContactController';
import EmployeeContext from '@/contexts/EmployeeContext';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
    const employee = useContext(EmployeeContext);
    const { url } = usePage();
    const pages = [
        {
            id: 'basic',
            label: t('Basic Information'),
            icon: GrInfo,
            href: info(employee.data.id).url,
            active: url === info(employee.data.id).url,
        },
        {
            id: 'national-id',
            label: t('National ID'),
            icon: IdCard,
            href: nationalId(employee.data.id).url,
            active: url === nationalId(employee.data.id).url,
        },
        {
            id: 'passport',
            label: t('Passport'),
            icon: LiaPassportSolid,
            href: passport(employee.data.id).url,
            active: url === passport(employee.data.id).url,
        },
        {
            id: 'bank',
            label: t('Bank Information'),
            icon: Landmark,
            href: bank(employee.data.id).url,
            active: url === bank(employee.data.id).url,
        },
        {
            id: 'address',
            label: t('National Address'),
            icon: MapPinHouse,
            href: nationalAddress(employee.data.id).url,
            active: url === nationalAddress(employee.data.id).url,
        },
        {
            id: 'contacts',
            label: t('Emergency Contacts'),
            icon: MdOutlineContactEmergency,
            href: contacts(employee.data.id).url,
            active: url === contacts(employee.data.id).url,
        },
    ];
    return (
        <>
            <div className="bg-white dark:bg-ash-800 shadow-sm border-b border-ash-200 dark:border-ash-700">
                <div className="max-w-fit mx-auto px-6">
                    <nav className="flex overflow-x-auto">
                        {pages.map((page) => (
                            <Link
                                key={page.id}
                                preserveScroll
                                href={page.href}
                                className={`flex items-center gap-2 py-4 px-6 text-sm font-medium ${page.active ? 'text-primary-600 dark:text-primary-400 border-b border-b-primary-400' : 'text-ash-900 dark:text-ash-100'} hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap`}
                            >
                                <page.icon className="w-4 h-4" />
                                <span>{page.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            {children}
        </>
    );
};

export default InfoLayout;
