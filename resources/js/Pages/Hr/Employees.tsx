import React, { useCallback, useEffect, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { getArrayParam, getStringParam } from '@/lib/utils';
import { EmployeeListProps, FormDataProps } from '@/types/hr';
import { router } from '@inertiajs/react';
import { index } from '@/actions/App/Http/Controllers/Hr/EmployeeController';
import { exportMethod } from '@/actions/App/Http/Controllers/Hr/EmployeeController';
import { handleExport } from '@/hooks/useExportEmployeesList';
import Pagination from '@/components/ui/Pagination';
import EmployeesTable from '../../components/Hr/EmployeesList/EmployeesTable';
import Header from '@/components/Hr/EmployeesList/Header';
import EmployeeFiltersDrawer from '@/components/Hr/EmployeesList/EmployeeFiltersDrawer';
import useDebouncedValue from '@/hooks/useDebouncValue';

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
    const [formData, setFormData] = useState<FormDataProps>({
        page: getArrayParam('page'),
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
    const [shouldFilter, setShouldFilter] = useState(false);
    const [searchInput, setSearchInput] = useState(formData.search);

    const debouncedSearch = useDebouncedValue(searchInput, 500);
    const defaultFormData: FormDataProps = {
        page: [],
        gender: [],
        status: [],
        departments: [],
        categories: [],
        countries: [],
        sponsorships: [],
        qualifications: [],
        entities: [],
        colleges: [],
        perPage: '10',
        search: '',
        active_from: '',
        active_to: '',
        joining_date_from: '',
        joining_date_to: '',
        resignation_date_from: '',
        resignation_date_to: '',
    };
    const onClose = () => {
        setShouldFilter(true);
        setFormData(defaultFormData);
        setOpen(false);
    };

    const onAction = () => {
        handleFilter();
        setOpen(false);
    };

    const updateFilter = (field: string, value: string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

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
        if (debouncedSearch !== formData.search) {
            setFormData((prev) => ({ ...prev, search: debouncedSearch }));
            setShouldFilter(true);
        }
    }, [formData, handleFilter, shouldFilter, debouncedSearch]);

    return (
        <AppLayout>
            <Header
                handleFilter={() => setOpen(true)}
                handleExport={(e: React.FormEvent<HTMLFormElement>) =>
                    handleExport(e, exportMethod().url, formData)
                }
                formData={formData}
                handleSearch={(e) => setSearchInput(e.target.value)}
                handlePerPageChange={handlePerPageChange}
                searchInput={searchInput}
            />
            <EmployeesTable employees={employees} />
            <Pagination {...employees.meta} />
            <EmployeeFiltersDrawer
                open={open}
                onClose={onClose}
                onAction={onAction}
                setFormData={setFormData}
                updateFilter={updateFilter}
                formData={formData}
                status={status}
                genders={genders}
                departments={departments}
                categories={categories}
                countries={countries}
                sponsorships={sponsorships}
                qualifications={qualifications}
                entities={entities}
                colleges={colleges}
            />
        </AppLayout>
    );
};

export default Employees;
