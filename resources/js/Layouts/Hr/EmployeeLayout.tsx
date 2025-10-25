import React, { useContext } from 'react';
import {
    ArrowLeft,
    Award,
    Binoculars,
    BookMarked,
    Briefcase,
    Clock,
    DollarSign,
    GraduationCap,
    Mail,
    Trophy,
    User,
} from 'lucide-react';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from 'i18next';
import { index as employees } from '@/actions/App/Http/Controllers/EmployeesController';
import { index as qualifications } from '@/actions/App/Http/Controllers/QualificationConroller';
import { index as academicExperience } from '@/actions/App/Http/Controllers/AcademicExperienceController';
import { index as experience } from '@/actions/App/Http/Controllers/ExperienceController';
import { index as salary } from '@/actions/App/Http/Controllers/SalaryController';
import { index as achievement } from '@/actions/App/Http/Controllers/AchievementController';
import { index as research } from '@/actions/App/Http/Controllers/ResearchController';
import { index as courses } from '@/actions/App/Http/Controllers/CourseController';
import { index as info } from '@/actions/App/Http/Controllers/BasicInfoController';
import { index as contract } from '@/actions/App/Http/Controllers/ContractContoller';
import { index as hierarachy } from '@/actions/App/Http/Controllers/HierarchyController';
import { index as operational } from '@/actions/App/Http/Controllers/OperationalDataController';
import { Link, usePage } from '@inertiajs/react';
import { GrInfo } from 'react-icons/gr';
import EmployeeContext from '@/contexts/EmployeeContext';
import { TbContract } from 'react-icons/tb';
const EmployeeLayout = ({ children }: { children: React.ReactNode }) => {
    const { language } = useLanguage();
    const { url } = usePage();
    const employee = useContext(EmployeeContext);
    const infoRegex = new RegExp(`^/hr/employees/\\d+/info(?:/.*)?$`);
    const pages = [
        {
            id: 'info',
            label: t('Personal Information'),
            icon: GrInfo,
            href: info(employee.data.id).url,
            active: infoRegex.test(url),
        },
        {
            id: 'official',
            label: t('Official Information'),
            icon: TbContract,
            href: contract(employee.data.id).url,
            active:
                url === contract(employee.data.id).url ||
                url === hierarachy(employee.data.id).url ||
                url === operational(employee.data.id).url,
        },
        {
            id: 'qualifications',
            label: t('Qualifications'),
            icon: GraduationCap,
            href: qualifications(employee.data.id).url,
            active: url === qualifications(employee.data.id).url,
        },
        {
            id: 'experiences',
            label: t('Academic Experiences'),
            icon: BookMarked,
            href: academicExperience(employee.data.id).url,
            active: url === academicExperience(employee.data.id).url,
        },
        {
            id: 'otherExperiences',
            label: t('Experiences'),
            icon: Briefcase,
            href: experience(employee.data.id).url,
            active: url === experience(employee.data.id).url,
        },
        {
            id: 'courses',
            label: t('Courses'),
            icon: Award,
            href: courses(employee.data.id).url,
            active: url === courses(employee.data.id).url,
        },
        {
            id: 'research',
            label: t('Research'),
            icon: Binoculars,
            href: research(employee.data.id).url,
            active: url === research(employee.data.id).url,
        },
        {
            id: 'achievements',
            label: t('Achievements'),
            icon: Trophy,
            href: achievement(employee.data.id).url,
            active: url === achievement(employee.data.id).url,
        },
        {
            id: 'salary',
            label: t('Salary'),
            icon: DollarSign,
            href: salary(employee.data.id).url,
            active: url === salary(employee.data.id).url,
        },
    ];

    return (
        <>
            {/* md:sticky md:top-0 md:z-40 */}
            <section className="">
                <div className="bg-gradient-to-l from-primary-200 to-primary-400 dark:from-primary-700 dark:to-primary-950 text">
                    <div className="max-w-7xl mx-auto px-6 py-8 ">
                        {/* Back Button */}
                        <Link
                            href={employees().url}
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
            </section>
            <section>{children}</section>
        </>
    );
};

export default EmployeeLayout;
