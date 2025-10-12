import EmployeeContext from '@/contexts/EmployeeContext';
import { index as contract } from '@/actions/App/Http/Controllers/ContractContoller';
import { index as hierarchy } from '@/actions/App/Http/Controllers/HierarchyController';
import { index as operational } from '@/actions/App/Http/Controllers/OperationalDataController';
import { Link, usePage } from '@inertiajs/react';
import { t } from 'i18next';
import { ReceiptText, UserCog } from 'lucide-react';
import React, { useContext } from 'react';
import { VscTypeHierarchySub } from 'react-icons/vsc';

const OfficialLayout = ({ children }: { children: React.ReactNode }) => {
    const employee = useContext(EmployeeContext);
    const { url } = usePage();
    const pages = [
        {
            id: 'contact',
            label: t('Contract Information'),
            icon: ReceiptText,
            href: contract(employee.data.id).url,
            active: url === contract(employee.data.id).url,
        },
        {
            id: 'hierarchy',
            label: t('Employee Hierarchy'),
            icon: VscTypeHierarchySub,
            href: hierarchy(employee.data.id).url,
            active: url === hierarchy(employee.data.id).url,
        },
        {
            id: 'operational',
            label: t('Operational Data'),
            icon: UserCog,
            href: operational(employee.data.id).url,
            active: url === operational(employee.data.id).url,
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

export default OfficialLayout;
