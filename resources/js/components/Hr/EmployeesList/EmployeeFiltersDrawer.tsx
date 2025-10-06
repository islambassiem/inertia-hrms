// import DatePicker from '@/components/ui/DatePicker';
import Drawer from '@/components/ui/Drawer';
import MultiSelect from '@/components/ui/MultiSelect';
import { FormDataProps, ResourceList } from '@/types/hr';
import { t } from 'i18next';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import DateRangeSection from './DateRangeSection';

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
const EmployeeFiltersDrawer = memo(function EmployeeDrawer({
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
}: EmployeeFilterProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const createDateHandler = useCallback(
        (field: string) => {
            return (date: Date | null) => {
                setFormData((prev) => ({
                    ...prev,
                    [field]: date ? date.toISOString().slice(0, 10) : '',
                }));
            };
        },
        [setFormData]
    );

    const dateHandlers = useMemo(
        () => ({
            active_from: createDateHandler('active_from'),
            active_to: createDateHandler('active_to'),
            joining_date_from: createDateHandler('joining_date_from'),
            joining_date_to: createDateHandler('joining_date_to'),
            resignation_date_from: createDateHandler('resignation_date_from'),
            resignation_date_to: createDateHandler('resignation_date_to'),
        }),
        [createDateHandler]
    );

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
                    <DateRangeSection
                        title="Active Period"
                        fromValue={formData.active_from}
                        toValue={formData.active_to}
                        onFromChange={dateHandlers.active_from}
                        onToChange={dateHandlers.active_to}
                    />

                    <DateRangeSection
                        title="Joining Date"
                        fromValue={formData.joining_date_from}
                        toValue={formData.joining_date_to}
                        onFromChange={dateHandlers.joining_date_from}
                        onToChange={dateHandlers.joining_date_to}
                    />

                    <DateRangeSection
                        title="Resignation Date"
                        fromValue={formData.resignation_date_from}
                        toValue={formData.resignation_date_to}
                        onFromChange={dateHandlers.resignation_date_from}
                        onToChange={dateHandlers.resignation_date_to}
                    />

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
                            title={t('Entity')}
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
});

export default EmployeeFiltersDrawer;
