import React, { useCallback, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import AppLayout from '@/Layouts/AppLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { t } from 'i18next';
import DatePicker from '@/components/ui/DatePicker';
import { getArrayParam, getStringParam } from '@/lib/utils';
import MultiSelect from '@/components/ui/MultiSelect';
import { EmployeeListProps } from '@/types/hr';
import { Link } from '@inertiajs/react';

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

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
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
        active_from: getStringParam('active_from') ?? null,
        active_to: getStringParam('active_to') ?? null,
        joining_date_from: getStringParam('joining_date_from') ?? null,
        joining_date_to: getStringParam('joining_date_to') ?? null,
        resignation_date_from: getStringParam('resignation_date_from') ?? null,
        resignation_date_to: getStringParam('resignation_date_to') ?? null,
    });

    const colums = [
        'National ID',
        'Nationality',
        'Date of Birth',
        'Sponsorship',
        'Department',
        'Category',
        'Joining Date',
        'Resignation Date',
        'Gender',
        'Gender',
        'Gender',
        'Gender',
        'Gender',
        'Gender',
        'Gender',
    ];

    console.log(employees);
    return (
        <AppLayout>
            <Space>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space>
            <section className="min-w-full overflow-x-auto border-collapse whitespace-nowrap rounded-lg shadow-lg mt-5 max-h-10/12">
                <table className="p-2 min-w-full ">
                    <thead className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100 border-b-2 border-gray-200 sticky top-0 right-0 z-10">
                        <tr className="min-h-11">
                            <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right w-20 sticky top-0 right-0 z-50 bg-gray-50 dark:bg-gray-800">
                                #
                            </th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right w-52 sticky top-0 right-[70px] z-50 bg-gray-50 dark:bg-gray-800">
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
                                className={`group text-gray-700 dark:text-gray-200 p-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800 ' : 'bg-white dark:bg-gray-900'} sticky`}
                            >
                                <td
                                    className={`group-hover:bg-gray-200 group-hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800 ' : 'bg-white dark:bg-gray-900'} sticky right-0 z-30 `}
                                >
                                    <Link
                                        href={'#'}
                                        className="text-blue-500 hover:underline font-bold"
                                    >
                                        {employee.empid}
                                    </Link>
                                </td>
                                <td
                                    className={`flex gap-2 overflow-x-auto p-2 text-sm  whitespace-nowrap sticky right-[70px] ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800 ' : 'bg-white dark:bg-gray-900'} group-hover:bg-gray-200 group-hover:dark:bg-gray-700`}
                                >
                                    <img
                                        src={employee.image}
                                        alt={employee.name_en}
                                        className="size-15 p-2 rounded-3xl"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-fustat">
                                            {employee.name_ar}
                                        </span>
                                        <span className="font-playfair">
                                            {employee.name_en}
                                        </span>
                                        <span className="font-playfair text-sm text-muted">
                                            {employee.email}
                                        </span>
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
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                                <td>{employee.gender.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <Drawer
                title={t('Employees Filter')}
                placement={language === 'ar' ? 'left' : 'right'}
                closable={false}
                onClose={onClose}
                open={open}
                key={'right'}
                width={500}
                rootClassName="custom-drawer"
                extra={
                    <Space>
                        <Button onClick={onClose}>{t('Cancel')}</Button>
                        <Button type="primary" onClick={onClose}>
                            {t('Apply')}
                        </Button>
                    </Space>
                }
            >
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
                                    ? new Date(formData.resignation_date_from)
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
                        <h3 className="font-bold mb-2">{t('Job Status')}</h3>
                        <MultiSelect
                            items={status.data}
                            name="status"
                            selected={formData.status}
                            onChange={handleStatusChange}
                            direction="start"
                        />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="font-bold mb-2">{t('Sponsorship')}</h3>
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
                        <h3 className="font-bold mb-2">{t('Department')}</h3>
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
            </Drawer>
        </AppLayout>
    );
};

export default Employees;
