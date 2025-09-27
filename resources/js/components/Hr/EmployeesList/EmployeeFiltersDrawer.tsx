import DatePicker from '@/components/ui/DatePicker';
import Drawer from '@/components/ui/Drawer';
import MultiSelect from '@/components/ui/MultiSelect';
import { FormDataProps, ResourceList } from '@/types/hr';
import { t } from 'i18next';
import React, { useRef } from 'react';

interface EmployeeFilterProps {
    onClose: () => void;
    onAction: () => void;
    setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
    // eslint-disable-next-line no-unused-vars
    updateFilter: (key: keyof FormDataProps, value: string[]) => void;
    open: boolean;
    formData: FormDataProps;
    status: ResourceList;
    genders: ResourceList;
    departments: ResourceList;
    categories: ResourceList;
    countries: ResourceList;
    sponsorships: ResourceList;
    qualifications: ResourceList;
    entities: ResourceList;
    colleges: ResourceList;
}

const EmployeeFiltersDrawer = ({
    open,
    onClose,
    onAction,
    updateFilter,
    setFormData,
    formData,
    status,
    genders,
    departments,
    categories,
    countries,
    sponsorships,
    qualifications,
    entities,
    colleges,
}: EmployeeFilterProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <>
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
                        <MultiSelect
                            items={status.data}
                            name="status"
                            selected={formData.status}
                            onChange={(v) => updateFilter('status', v)}
                            direction="start"
                            title={t('Job Status')}
                        />
                        <MultiSelect
                            items={genders.data}
                            name="gender"
                            selected={formData.gender}
                            onChange={(v) => updateFilter('gender', v)}
                            direction="end"
                            title={t('Gender')}
                        />
                    </section>

                    {/* Institution and College */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <MultiSelect
                            items={entities.data}
                            name="entities"
                            selected={formData.entities}
                            onChange={(v) => updateFilter('entities', v)}
                            direction="start"
                            title={t('Institution')}
                        />
                        <MultiSelect
                            items={colleges.data}
                            name="college"
                            selected={formData.colleges}
                            onChange={(v) => updateFilter('colleges', v)}
                            direction="end"
                            title={t('College')}
                        />
                    </section>

                    {/* Nationality and Sponsprship */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <MultiSelect
                            items={countries.data}
                            selected={formData.countries}
                            name="countries"
                            onChange={(v) => updateFilter('countries', v)}
                            direction="start"
                            title={t('Nationality')}
                        />
                        <MultiSelect
                            items={sponsorships.data}
                            selected={formData.sponsorships}
                            name="sponsorships"
                            onChange={(v) => updateFilter('sponsorships', v)}
                            direction="end"
                            title={t('Sponsorship')}
                        />
                    </section>

                    {/* Category and Department */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <MultiSelect
                            items={categories.data}
                            name="categories"
                            selected={formData.categories}
                            onChange={(v) => updateFilter('categories', v)}
                            direction="start"
                            title={t('Category')}
                        />
                        <MultiSelect
                            items={departments.data}
                            selected={formData.departments}
                            name="departments"
                            onChange={(v) => updateFilter('departments', v)}
                            direction="end"
                            title={t('Department')}
                        />
                    </section>

                    {/* َQualifications */}
                    <section className="grid grid-cols-2 gap-4 mb-4">
                        <MultiSelect
                            items={qualifications.data}
                            name="qualifications"
                            selected={formData.qualifications}
                            onChange={(v) => updateFilter('qualifications', v)}
                            direction="start"
                            title={t('Qualifications')}
                        />
                    </section>
                </form>
            </Drawer>
        </>
    );
};

export default EmployeeFiltersDrawer;
