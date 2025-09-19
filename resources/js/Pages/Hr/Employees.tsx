import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from 'i18next';
import DatePicker from '@/components/ui/DatePicker';
import { getArrayParam, getStringParam } from '@/lib/utils';
import MultiSelect from '@/components/ui/MultiSelect';
import { EmployeeListProps } from '@/types/hr';
import { Link, router } from '@inertiajs/react';
import Drawer from '@/components/ui/Drawer';
import { index } from '@/actions/App/Http/Controllers/Hr/EmployeeController';
import { exportMethod } from '@/actions/App/Http/Controllers/Hr/EmployeeController';

const Employees = ({
    employees,
    departments,
    categories,
    countries,
    sponsorships,
    genders,
    status,
    qualifications,
}: EmployeeListProps) => {
    const [open, setOpen] = useState(false);
    const { language } = useLanguage();
    const [copied, setCopies] = useState('');
    const formRef = useRef(null);
    const [perPage, setPerPage] = useState(5);
    const [shouldFilter, setShouldFilter] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setFormData({
            page: ['1'],
            gender: [],
            status: [],
            departments: [],
            categories: [],
            countries: [],
            sponsorships: [],
            qualifications: [],
            perPage: '5',
            active_from: '',
            active_to: '',
            joining_date_from: '',
            joining_date_to: '',
            resignation_date_from: '',
            resignation_date_to: '',
        });
    };

    const onAction = () => {
        handleFilter();
        setOpen(false);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopies(text);
        });
    };

    const handleGenderChange = useCallback(
        (gender: string[]) => setFormData((prev) => ({ ...prev, gender })),
        []
    );

    const handleStatusChange = useCallback(
        (status: string[]) => setFormData((prev) => ({ ...prev, status })),
        []
    );

    const handleDepartmentsChange = useCallback(
        (departments: string[]) =>
            setFormData((prev) => ({ ...prev, departments })),
        []
    );

    const handleCategoriesChange = useCallback(
        (categories: string[]) =>
            setFormData((prev) => ({ ...prev, categories })),
        []
    );

    const handleQualificationsChange = useCallback(
        (qualifications: string[]) =>
            setFormData((prev) => ({ ...prev, qualifications })),
        []
    );

    const handleCountriesChange = useCallback(
        (countries: string[]) =>
            setFormData((prev) => ({ ...prev, countries })),
        []
    );

    const handleSponsorshipsChange = useCallback(
        (sponsorships: string[]) =>
            setFormData((prev) => ({ ...prev, sponsorships })),
        []
    );

    const [formData, setFormData] = useState({
        page: getArrayParam('page') ?? 1,
        gender: getArrayParam('gender'),
        status: getArrayParam('status'),
        departments: getArrayParam('departments'),
        categories: getArrayParam('categories'),
        countries: getArrayParam('countries'),
        sponsorships: getArrayParam('sponsorships'),
        qualifications: getArrayParam('qualifications'),
        perPage: getStringParam('perPage') ?? perPage,
        active_from: getStringParam('active_from') ?? null,
        active_to: getStringParam('active_to') ?? null,
        joining_date_from: getStringParam('joining_date_from') ?? null,
        joining_date_to: getStringParam('joining_date_to') ?? null,
        resignation_date_from: getStringParam('resignation_date_from') ?? null,
        resignation_date_to: getStringParam('resignation_date_to') ?? null,
    });

    const handleFilter = useCallback(() => {
        const cleanFormData = Object.fromEntries(
            Object.entries(formData).filter(([, v]) => v !== null && v !== '')
        );
        router.visit(index(), {
            method: 'get',
            data: cleanFormData,
            preserveState: true,
            preserveScroll: true,
        });
    }, [formData]);

    const handlePerPageChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const perPage = e.target.value;
            setPerPage(parseInt(perPage));
            setFormData((prev) => ({ ...prev, perPage }));
            setShouldFilter(true);
        },
        [setPerPage]
    );

    useEffect(() => {
        if (shouldFilter) {
            handleFilter();
            setShouldFilter(false);
        }
    }, [formData.perPage, handleFilter, shouldFilter]);

    const colums = [
        'National ID',
        'Nationality',
        'Date of Birth',
        'Sponsorship',
        'Department',
        'Category',
        'Joining Date',
        'Resignation Date',
    ];

    const handleExport = (e: React.FormEvent) => {
        e.preventDefault();

        const exportForm = document.createElement('form');
        exportForm.method = 'POST';
        exportForm.action = exportMethod().url;
        exportForm.style.display = 'none';

        // Add formData as hidden inputs
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null && value !== '' && value !== undefined) {
                if (Array.isArray(value) && value.length > 0) {
                    // Send arrays with proper Laravel array notation
                    value.forEach((item, index) => {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = `${key}[${index}]`; // This creates gender[0], gender[1], etc.
                        input.value = String(item);
                        exportForm.appendChild(input);
                    });
                } else if (!Array.isArray(value)) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = String(value);
                    exportForm.appendChild(input);
                }
            }
        });

        // Add CSRF token
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute('content');
        if (csrfToken) {
            const csrfInput = document.createElement('input');
            csrfInput.type = 'hidden';
            csrfInput.name = '_token';
            csrfInput.value = csrfToken;
            exportForm.appendChild(csrfInput);
        }

        document.body.appendChild(exportForm);
        exportForm.submit();
        document.body.removeChild(exportForm);
    };

    return (
        <AppLayout>
            <div>
                <button
                    onClick={showDrawer}
                    className="text-black dark:text-white"
                >
                    Open
                </button>
                <button
                    onClick={handleExport}
                    className="text-black dark:text-white"
                >
                    export
                </button>
                <div>
                    <select
                        name="pages"
                        id="pages"
                        value={perPage}
                        onChange={handlePerPageChange}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <section className="min-w-full overflow-x-auto border-collapse whitespace-nowrap rounded-lg shadow-lg mt-5 max-h-11/12">
                {employees.data.length > 0 ? (
                    <table className="p-2 table-auto border-collapse">
                        <thead className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 border-b-2 border-gray-200 sticky top-0 left-0 rtl:left-auto rtl:right-0 z-10">
                            <tr className="min-h-11">
                                <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right sticky top-0 left-0 rtl:left-auto rtl:right-0 z-20 bg-gray-50 dark:bg-gray-800">
                                    #
                                </th>
                                {/* Set a fixed width for the employee column */}
                                <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right sticky top-0 left-[70px] rtl:left-auto rtl:right-[70px] z-20 bg-gray-50 dark:bg-gray-800 w-64">
                                    {t('Employee')}
                                </th>
                                {colums.map((col) => (
                                    <th
                                        className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right"
                                        key={col}
                                    >
                                        {t(col)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {employees.data.map((employee, idx) => (
                                <tr
                                    key={employee.id}
                                    className={`group text-gray-700 dark:text-gray-200 p-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800 ' : 'bg-white dark:bg-gray-900'} ${employee.is_active ? '' : 'text-red-500 dark:text-red-600'} sticky`}
                                >
                                    <td
                                        className={`group-hover:bg-gray-200 group-hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800 ' : 'bg-white dark:bg-gray-900'} sticky left-0 rtl:left-auto rtl:right-0 z-30 `}
                                    >
                                        <Link
                                            href={'#'}
                                            className={` hover:underline font-bold ${employee.is_active ? 'text-blue-500' : 'text-red-500'}`}
                                        >
                                            {employee.empid}
                                        </Link>
                                    </td>
                                    {/* Fixed width and proper text truncation */}
                                    <td
                                        className={`p-2 text-sm sticky left-[70px] rtl:left-auto rtl:right-[70px] w-64 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800 ' : 'bg-white dark:bg-gray-900'} group-hover:bg-gray-200 group-hover:dark:bg-gray-700`}
                                    >
                                        <div className="flex gap-2">
                                            <img
                                                src={employee.image}
                                                alt={employee.name_en}
                                                className="size-15 p-2 rounded-3xl flex-shrink-0"
                                            />
                                            <div className="flex flex-col min-w-0 flex-1 ">
                                                <button
                                                    onClick={() =>
                                                        handleCopy(
                                                            employee.name_ar
                                                        )
                                                    }
                                                    className={`relative font-fustat cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right`}
                                                    title={employee.name_ar} // Show full name on hover
                                                >
                                                    {employee.name_ar}
                                                    {copied ===
                                                        employee.name_ar && (
                                                        <span className="absolute -top-3 left-full rtl:left-auto rtl:right-full text-xs text-green-600">
                                                            {t('Copied')}!
                                                        </span>
                                                    )}
                                                </button>
                                                <button
                                                    className={`relative cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right`}
                                                    onClick={() =>
                                                        handleCopy(
                                                            employee.name_en
                                                        )
                                                    }
                                                    title={employee.name_en} // Show full name on hover
                                                >
                                                    {employee.name_en}
                                                    {copied ===
                                                        employee.name_en && (
                                                        <span className="absolute -top-3 left-full rtl:left-auto rtl:right-full text-xs text-green-600">
                                                            {t('Copied')}!
                                                        </span>
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleCopy(
                                                            employee.email
                                                        )
                                                    }
                                                    className="font-playfair text-sm text-muted relative cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right"
                                                    title={employee.email} // Show full email on hover
                                                >
                                                    {employee.email}
                                                    {copied ===
                                                        employee.email && (
                                                        <span className="absolute -top-3 left-full rtl:left-auto rtl:right-full text-xs text-green-600 rtl:font-fustat">
                                                            {t('Copied')}!
                                                        </span>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {employee.identification}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {employee.nationality}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {new Date(
                                            employee.date_of_birth
                                        ).toLocaleDateString(language, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        })}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {employee.sponsorship}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {Array.isArray(employee.departments)
                                            ? employee.departments
                                                  .map(
                                                      (department: {
                                                          id: number;
                                                          name: string;
                                                      }) => department.name
                                                  )
                                                  .join(', ')
                                            : ''}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {Array.isArray(employee.categories)
                                            ? employee.categories
                                                  .map(
                                                      (category: {
                                                          id: number;
                                                          name: string;
                                                      }) => category.name
                                                  )
                                                  .join(', ')
                                            : ''}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {new Date(
                                            employee.joining_date
                                        ).toLocaleDateString(language, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        })}
                                    </td>
                                    <td className="px-4 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                                        {employee.resignation_date
                                            ? new Date(
                                                  employee.resignation_date
                                              ).toLocaleDateString(language, {
                                                  year: 'numeric',
                                                  month: 'short',
                                                  day: '2-digit',
                                              })
                                            : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="bg-pink-100 p-4">
                        There are not record matching this criteria
                    </div>
                )}
            </section>
            <div className="p-6 px-4 flex items-center justify-between text-gray-700 dark:text-gray-200">
                <div>
                    {employees.meta.links.map(
                        (link: {
                            url: string;
                            label: string;
                            active: boolean;
                        }) =>
                            link.url ? (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className={`p-1 mx-1 ${
                                        link.active
                                            ? 'text-blue-500 font-bold'
                                            : ''
                                    }`}
                                />
                            ) : (
                                <span
                                    key={link.label}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className="p-1 mx-1 text-slate-300"
                                ></span>
                            )
                    )}
                </div>
                <div>
                    {t('Showing')} {employees.meta.from} {t('to')}{' '}
                    {employees.meta.to} {t('of')} {employees.meta.total}
                </div>
            </div>

            <Drawer
                title={t('Employees Filter')}
                onClose={onClose}
                onAction={onAction}
                open={open}
                width={500}
            >
                <form ref={formRef}>
                    {/* Active */}
                    <section className="mb-4">
                        <p className="mb-2 text-lg">{t('Active Period')}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <DatePicker
                                selectedDate={
                                    formData.active_from
                                        ? new Date(formData.active_from)
                                        : null
                                }
                                onDateSelect={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        active_from: date
                                            ? date.toISOString().slice(0, 10)
                                            : '',
                                    }))
                                }
                                placeholder={t('From')}
                                direction="start"
                            />
                            <DatePicker
                                selectedDate={
                                    formData.active_to
                                        ? new Date(formData.active_to)
                                        : null
                                }
                                onDateSelect={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        active_to: date
                                            ? date.toISOString().slice(0, 10)
                                            : '',
                                    }))
                                }
                                placeholder={t('To')}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* Joining Date */}
                    <section className="mb-4">
                        <p className="mb-2 text-lg">{t('Joining Date')}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <DatePicker
                                selectedDate={
                                    formData.joining_date_from
                                        ? new Date(formData.joining_date_from)
                                        : null
                                }
                                onDateSelect={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        joining_date_from: date
                                            ? date.toISOString().slice(0, 10)
                                            : '',
                                    }))
                                }
                                placeholder={t('From')}
                                direction="start"
                            />
                            <DatePicker
                                selectedDate={
                                    formData.joining_date_to
                                        ? new Date(formData.joining_date_to)
                                        : null
                                }
                                onDateSelect={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        joining_date_to: date
                                            ? date.toISOString().slice(0, 10)
                                            : '',
                                    }))
                                }
                                placeholder={t('To')}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* Resignation Date */}
                    <section className="mb-4">
                        <p className="mb-2 text-lg">{t('Resignation Date')}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <DatePicker
                                selectedDate={
                                    formData.resignation_date_from
                                        ? new Date(
                                              formData.resignation_date_from
                                          )
                                        : null
                                }
                                onDateSelect={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        resignation_date_from: date
                                            ? date.toISOString().slice(0, 10)
                                            : '',
                                    }))
                                }
                                placeholder={t('From')}
                                direction="start"
                            />
                            <DatePicker
                                selectedDate={
                                    formData.resignation_date_to
                                        ? new Date(formData.resignation_date_to)
                                        : null
                                }
                                onDateSelect={(date) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        resignation_date_to: date
                                            ? date.toISOString().slice(0, 10)
                                            : '',
                                    }))
                                }
                                placeholder={t('To')}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* Nationality and Gender */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 flex flex-col">
                            <div>
                                <h3 className="font-bold mb-2">
                                    {t('Nationality')}
                                </h3>
                                <MultiSelect
                                    items={countries.data}
                                    selected={formData.countries}
                                    name="countries"
                                    onChange={handleCountriesChange}
                                    direction="start"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">{t('Gender')}</h3>
                            <MultiSelect
                                items={genders.data}
                                name="gender"
                                selected={formData.gender}
                                onChange={handleGenderChange}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* Status and Sponsprship */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">
                                {t('Job Status')}
                            </h3>
                            <MultiSelect
                                items={status.data}
                                name="status"
                                selected={formData.status}
                                onChange={handleStatusChange}
                                direction="start"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">
                                {t('Sponsorship')}
                            </h3>
                            <MultiSelect
                                items={sponsorships.data}
                                selected={formData.sponsorships}
                                name="sponsorships"
                                onChange={handleSponsorshipsChange}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* Category and Department */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">{t('Category')}</h3>
                            <MultiSelect
                                items={categories.data}
                                name="categories"
                                selected={formData.categories}
                                onChange={handleCategoriesChange}
                                direction="start"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">
                                {t('Department')}
                            </h3>
                            <MultiSelect
                                items={departments.data}
                                selected={formData.departments}
                                name="departments"
                                onChange={handleDepartmentsChange}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* َQualifications */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">
                                {t('Qualifications')}
                            </h3>
                            <MultiSelect
                                items={qualifications.data}
                                name="qualifications"
                                selected={formData.qualifications}
                                onChange={handleQualificationsChange}
                                direction="start"
                            />
                        </div>
                    </section>
                </form>
            </Drawer>
        </AppLayout>
    );
};

export default Employees;
