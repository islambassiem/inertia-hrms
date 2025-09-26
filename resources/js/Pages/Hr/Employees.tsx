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
import Pagination from '@/components/ui/Pagination';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { Funnel } from 'lucide-react';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';

const Employees = ({
    employees,
    departments,
    categories,
    countries,
    sponsorships,
    genders,
    status,
    qualifications,
    entities,
    colleges,
}: EmployeeListProps) => {
    const [formData, setFormData] = useState({
        page: getArrayParam('page') ?? ['1'],
        gender: getArrayParam('gender'),
        status: getArrayParam('status'),
        departments: getArrayParam('departments'),
        categories: getArrayParam('categories'),
        countries: getArrayParam('countries'),
        sponsorships: getArrayParam('sponsorships'),
        qualifications: getArrayParam('qualifications'),
        entities: getArrayParam('entities'),
        colleges: getArrayParam('colleges'),
        perPage: getStringParam('perPage') ? getStringParam('perPage') : '10',
        search: getStringParam('search') ?? '',
        active_from: getStringParam('active_from') ?? null,
        active_to: getStringParam('active_to') ?? null,
        joining_date_from: getStringParam('joining_date_from') ?? null,
        joining_date_to: getStringParam('joining_date_to') ?? null,
        resignation_date_from: getStringParam('resignation_date_from') ?? null,
        resignation_date_to: getStringParam('resignation_date_to') ?? null,
    });
    const [open, setOpen] = useState(false);
    const { language } = useLanguage();
    const [copied, setCopies] = useState('');
    const formRef = useRef(null);
    const [shouldFilter, setShouldFilter] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setShouldFilter(true);
        setFormData({
            page: ['1'],
            gender: [],
            status: [],
            departments: [],
            categories: [],
            countries: [],
            sponsorships: [],
            qualifications: [],
            entities: [],
            colleges: [],
            perPage: '5',
            search: '',
            active_from: '',
            active_to: '',
            joining_date_from: '',
            joining_date_to: '',
            resignation_date_from: '',
            resignation_date_to: '',
        });
        setShouldFilter(true);
        setOpen(false);
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

    const handleEntitiesChange = useCallback(
        (entities: string[]) => setFormData((prev) => ({ ...prev, entities })),
        []
    );

    const handleCollegesChange = useCallback(
        (colleges: string[]) => setFormData((prev) => ({ ...prev, colleges })),
        []
    );

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

    const handlePerPageChange = useCallback((perPage: string) => {
        setFormData((prev) => ({ ...prev, perPage }));
        setShouldFilter(true);
    }, []);

    useEffect(() => {
        if (shouldFilter) {
            handleFilter();
            setShouldFilter(false);
        }
    }, [formData, handleFilter, shouldFilter]);

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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, search: e.target.value }));
        setShouldFilter(true);
        handleFilter();
    };

    return (
        <AppLayout>
            <div className="flex justify-start items-center gap-4">
                <Button onClick={showDrawer} className="btn-primary">
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
                            value={formData.search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>
            <section className="overflow-x-auto border-collapse whitespace-nowrap rounded-lg shadow-lg mt-5 max-h-10/12">
                {employees.data.length > 0 ? (
                    <table className="p-2 table-auto border-collapse w-full">
                        <thead className="border-b-2 sticky top-0 left-0 rtl:left-auto rtl:right-0 z-10">
                            <tr className="min-h-11 surface">
                                <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right sticky top-0 left-0 rtl:left-auto rtl:right-0 z-20 surface">
                                    #
                                </th>
                                {/* Set a fixed width for the employee column */}
                                <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right sticky top-0 left-[70px] rtl:left-auto rtl:right-[70px] z-20 w-64 surface">
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
                        <tbody className="divide-y divide-ash-100 dark:divide-ash-800">
                            {employees.data.map((employee, idx) => (
                                <tr
                                    key={employee.id}
                                    className={`group p-2 ${idx % 2 === 0 ? 'bg-ash-200 dark:bg-ash-700' : 'bg-ash-100 dark:bg-ash-600'} ${employee.is_active ? '' : 'text-danger-500'} sticky`}
                                >
                                    <td
                                        className={`p-2 ${idx % 2 === 0 ? 'bg-ash-200 dark:bg-ash-700' : 'bg-ash-100 dark:bg-ash-600'} sticky left-0 rtl:left-auto rtl:right-0 z-30`}
                                    >
                                        <Link
                                            href={'#'}
                                            className={`hover:underline font-bold ${employee.is_active ? '' : 'text-danger-500'}`}
                                        >
                                            {employee.empid}
                                        </Link>
                                    </td>
                                    {/* Fixed width and proper text truncation */}
                                    <td
                                        className={`p-2 text-sm sticky left-[70px] rtl:left-auto rtl:right-[70px] w-64 ${idx % 2 === 0 ? 'bg-ash-200 dark:bg-ash-700' : 'bg-ash-100 dark:bg-ash-600'} `}
                                    >
                                        <div className="flex gap-2">
                                            <img
                                                src={employee.image}
                                                alt={employee.name_en}
                                                className="size-15 p-2 rounded-3xl flex-shrink-0"
                                            />
                                            <div className="flex flex-col min-w-0 flex-1">
                                                <button
                                                    onClick={() =>
                                                        handleCopy(
                                                            employee.name_ar
                                                        )
                                                    }
                                                    className={`relative font-fustat cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right ${employee.is_active ? '' : 'text-danger-500'}`}
                                                >
                                                    {employee.name_ar}
                                                    {copied ===
                                                        employee.name_ar && (
                                                        <span className="absolute -top-3 left-full rtl:left-auto rtl:right-full text-xs">
                                                            {t('Copied')}!
                                                        </span>
                                                    )}
                                                </button>
                                                <button
                                                    className={`relative cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right ${employee.is_active ? '' : 'text-danger-500'}`}
                                                    onClick={() =>
                                                        handleCopy(
                                                            employee.name_en
                                                        )
                                                    }
                                                >
                                                    {employee.name_en}
                                                    {copied ===
                                                        employee.name_en && (
                                                        <span
                                                            className={`absolute -top-3 left-full rtl:left-auto rtl:right-full text-xs`}
                                                        >
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
                                                    className={`font-playfair text-muted relative cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right ${employee.is_active ? '' : 'text-danger-500'}`}
                                                >
                                                    {employee.email}
                                                    {copied ===
                                                        employee.email && (
                                                        <span className="absolute -top-3 left-full rtl:left-auto rtl:right-full text-xs rtl:font-fustat">
                                                            {t('Copied')}!
                                                        </span>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4">
                                        {employee.identification}
                                    </td>
                                    <td className="px-4">
                                        {employee.nationality}
                                    </td>
                                    <td className="px-4">
                                        {new Date(
                                            employee.date_of_birth
                                        ).toLocaleDateString(language, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        })}
                                    </td>
                                    <td className="px-4">
                                        {employee.sponsorship}
                                    </td>
                                    <td className="px-4">
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
                                    <td className="px-4">
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
                                    <td className="px-4">
                                        {new Date(
                                            employee.joining_date
                                        ).toLocaleDateString(language, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        })}
                                    </td>
                                    <td className="px-4">
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
                    <div className="p-4 flex justify-center items-center alert-error">
                        {t('There are not record matching this criteria')}
                    </div>
                )}
            </section>
            <Pagination {...employees.meta} />

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

                    {/* Status and Gender */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 flex flex-col">
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

                    {/* Institution and College */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex-1 flex flex-col">
                            <div className="flex-1 flex flex-col">
                                <h3 className="font-bold mb-2">
                                    {t('Institution')}
                                </h3>
                                <MultiSelect
                                    items={entities.data}
                                    name="entities"
                                    selected={formData.entities}
                                    onChange={handleEntitiesChange}
                                    direction="start"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h3 className="font-bold mb-2">{t('College')}</h3>
                            <MultiSelect
                                items={colleges.data}
                                name="college"
                                selected={formData.colleges}
                                onChange={handleCollegesChange}
                                direction="end"
                            />
                        </div>
                    </section>

                    {/* Nationality and Sponsprship */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
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
