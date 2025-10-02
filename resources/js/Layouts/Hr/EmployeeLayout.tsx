import React from 'react';
import { EmployeeData } from '@/types/hr';
import {
    ArrowLeft,
    Award,
    Briefcase,
    Clock,
    DollarSign,
    FileText,
    GraduationCap,
    Mail,
    Settings,
    User,
} from 'lucide-react';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from 'i18next';
import {
    index,
    info,
    infoEdit,
} from '@/actions/App/Http/Controllers/Hr/EmployeeController';
import { Link, usePage } from '@inertiajs/react';
import { GrInfo } from 'react-icons/gr';
const EmployeeLayout = ({
    children,
    employee,
}: {
    children: React.ReactNode;
    employee: EmployeeData;
}) => {
    const { language } = useLanguage();
    const { url } = usePage();

    const pages = [
        {
            id: 'info',
            label: t('Basic Info'),
            icon: GrInfo,
            href: info(employee.data.id).url,
            active:
                url === info(employee.data.id).url ||
                url === infoEdit(employee.data.id).url,
        },
        { id: 'experience', label: t('Experience'), icon: Briefcase },
        {
            id: 'qualifications',
            label: t('Qualifications'),
            icon: GraduationCap,
        },
        { id: 'certifications', label: t('Certifications'), icon: Award },
        { id: 'documents', label: t('Documents'), icon: FileText },
        { id: 'compensation', label: t('Compensation'), icon: DollarSign },
        { id: 'attendance', label: t('Attendance'), icon: Clock },
        { id: 'settings', label: t('Settings'), icon: Settings },
    ];

    return (
        <>
            <section className="">
                {/* md:sticky md:top-0 md:z-40 */}
                <div className="bg-gradient-to-l from-primary-200 to-primary-400 dark:from-primary-700 dark:to-primary-950 text">
                    <div className="max-w-7xl mx-auto px-6 py-8 ">
                        {/* Back Button */}
                        <Link
                            href={index().url}
                            className="flex items-center gap-2 hover:text-ash-500 mb-6 transition-colors group"
                        >
                            <ArrowLeft
                                className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180' : ''}`}
                            />
                            <span className="text-sm font-medium ">
                                {t('Employees List')}
                            </span>
                        </Link>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Avatar */}
                            <div className="relative">
                                <img
                                    src={employee.data.image}
                                    alt={employee.data.name_en}
                                    className={`w-32 h-32 rounded-full border-4 shadow-lg object-cover ${employee.data.is_active ? 'border-secondary-400' : 'border-danger-400'}`}
                                />
                                <div
                                    className={`absolute bottom-0 right-0 w-4 h-4  rounded-full border-2 border-ash-50 dark:border-ash-700 ${employee.data.is_active ? 'bg-secondary-400' : 'bg-danger-400'}`}
                                ></div>
                            </div>

                            {/* Employee Info */}
                            <div className="flex flex-col flex-1 ">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">
                                        {language === 'ar'
                                            ? employee.data.name_ar
                                            : employee.data.name_en}
                                    </h1>
                                    <p className="text-ash-500 dark:text-ash-400 text-lg mb-4">
                                        {Array.isArray(
                                            employee.data.positions
                                        ) &&
                                            employee.data.positions.length >
                                                0 &&
                                            employee.data.positions[0].name}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{employee.data.empid}</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        <span>
                                            {Array.isArray(
                                                employee.data.departments
                                            ) &&
                                                employee.data.departments
                                                    .length > 0 &&
                                                employee.data.departments[0]
                                                    .name}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="font-medium">
                                            <Mail className="size-4" />
                                        </span>
                                        <span>{employee.data.email}</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>
                                            {t('Joined')}{' '}
                                            {dateFormatter(
                                                employee.data.joining_date,
                                                language
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation Tabs */}
                <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex overflow-x-auto">
                            {pages.map((page) => (
                                <Link
                                    key={page.id}
                                    href={page.href}
                                    className={`flex items-center gap-2 py-4 px-6 text-sm font-medium ${page.active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-900 dark:text-gray-100'} hover:text-primary-600 dark:hover:text-primary-400 transition-colors`}
                                >
                                    <page.icon className="w-4 h-4" />
                                    <span>{page.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>
            <section>{children}</section>
        </>
    );
};

export default EmployeeLayout;
