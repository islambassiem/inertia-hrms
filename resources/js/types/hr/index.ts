export interface Employee {
    id: number;
    empid: number;
    image: string;
    email: string;
    identification: string;
    gender: Resource;
    name_ar: string;
    name_en: string;
    date_of_birth: Date;
    is_active: boolean;
    has_salary: boolean;
    has_biometric: boolean;
    works_on_saturday: boolean;
    joining_date: Date;
    resignation_date: Date | null | undefined;
    has_married_contract: boolean;
    vacation_class: '0' | '21' | '30';
    special_needs: boolean;
    nationality: string;
    sponsorship: string;
    categories: Resource;
    positions: Resource;
    departments: Resource;
    qualification: Resource;
}

export interface ResourceList {
    data: Resource[];
}

interface Resource {
    id: string;
    name: string;
}

export interface EmployeeListProps {
    employees: {
        links: any;
        meta: any;
        data: Employee[];
    };
    genders: ResourceList;
    status: ResourceList;
    departments: ResourceList;
    categories: ResourceList;
    countries: ResourceList;
    sponsorships: ResourceList;
    qualifications: ResourceList;
    entities: ResourceList;
    colleges: ResourceList;
}

export interface FormDataProps {
    page: string[];
    gender: string[];
    status: string[];
    departments: string[];
    categories: string[];
    countries: string[];
    sponsorships: string[];
    qualifications: string[];
    entities: string[];
    colleges: string[];
    perPage: string;
    search: string;
    active_from: string;
    active_to: string;
    joining_date_from: string;
    joining_date_to: string;
    resignation_date_from: string;
    resignation_date_to: string;
}

export interface HeaderProps {
    handleFilter: () => void;
    // eslint-disable-next-line no-unused-vars
    handleExport: (e: any) => void;
    formData: FormDataProps;
    // eslint-disable-next-line no-unused-vars
    handlePerPageChange: (perPage: string) => void;
    // eslint-disable-next-line no-unused-vars
    handleSearch: (e: any) => void;
}
