import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { getArrayParam, getStringParam } from '@/lib/utils';
import { EmployeeListProps, FormDataProps } from '@/types/hr';
import { router } from '@inertiajs/react';
import { index } from '@/actions/App/Http/Controllers/EmployeesController';
import { exportMethod } from '@/actions/App/Http/Controllers/EmployeesController';
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
    const defaultFormData: FormDataProps = useMemo(
        () => ({
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
        }),
        []
    );

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

    const handleFilterClick = useCallback(() => {
        setOpen(true);
    }, []);

    const handleExportClick = useCallback(
        (e: React.FormEvent<HTMLFormElement>) =>
            handleExport(e, exportMethod().url, formData),
        [formData]
    );

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
        },
        []
    );

    const handlePerPageChangeCallback = useCallback((perPage: string) => {
        setFormData((prev) => ({ ...prev, perPage }));
        setShouldFilter(true);
    }, []);

    const updateFilter = useCallback((field: string, value: string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    }, []);

    const onClose = useCallback(() => {
        setShouldFilter(true);
        setFormData(defaultFormData);
        setOpen(false);
    }, [defaultFormData]);

    const onAction = useCallback(() => {
        handleFilter();
        setOpen(false);
    }, [handleFilter]);

    const drawerProps = useMemo(
        () => ({
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
        }),
        [
            open,
            onClose,
            onAction,
            updateFilter,
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
        ]
    );

    useEffect(() => {
        if (shouldFilter) {
            handleFilter();
            setShouldFilter(false);
        }
    }, [shouldFilter, handleFilter]);

    useEffect(() => {
        if (debouncedSearch !== formData.search) {
            setFormData((prev) => ({ ...prev, search: debouncedSearch }));
            setShouldFilter(true);
        }
    }, [debouncedSearch, formData.search]);

    return (
        <AppLayout>
            <Header
                handleFilter={handleFilterClick}
                handleExport={handleExportClick}
                formData={formData}
                handleSearch={handleSearchChange}
                handlePerPageChange={handlePerPageChangeCallback}
                searchInput={searchInput}
            />
            <EmployeesTable employees={employees} />
            <Pagination {...employees.meta} />
            {open && <EmployeeFiltersDrawer {...drawerProps} />}
        </AppLayout>
    );
};

export default Employees;
