export interface Employee {
    id: number;
    empid: number;
    image: string;
    email: string;
    phone: string | null;
    mobile: string | null;
    personal_email: string | null;
    passport: Idnetification;
    identification: Idnetification;
    bank: Bank;
    address: Address;
    emergency_contacts: EmergencyContacts[];
    gender: Resource;
    marital_status: Resource;
    name_ar: string;
    name_en: string;
    date_of_birth: string | null;
    is_active: boolean;
    has_salary: boolean;
    has_biometric: boolean;
    works_on_saturday: boolean;
    joining_date: string;
    resignation_date: string | null;
    has_married_contract: boolean;
    vacation_class: '0' | '21' | '30';
    special_needs: boolean;
    nationality: string;
    sponsorship: string;
    categories: Resource[];
    positions: Resource[];
    departments: Resource[];
    qualification: Resource[];
}

interface Idnetification {
    id_number: string;
    place_of_issue: string | null;
    date_of_issue: string | null;
    date_of_expiry: string | null;
}

interface Bank {
    account: number;
    bank: Resource;
}

interface Address {
    building_number: string;
    city: string;
    district: string;
    postal_code: string;
    secondary_number: string;
    street: string;
}

interface EmergencyContacts {
    name: string;
    mobile: string;
    email: string;
    relation: string;
}

export interface EmployeeData {
    data: Employee;
}
export interface ResourceList {
    data: Resource[];
}

export interface Resource {
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
    searchInput: string;
}

export interface EmployeeName {
    first_name_ar: string;
    middle_name_ar: string | null;
    third_name_ar: string | null;
    family_name_ar: string;
    first_name_en: string;
    middle_name_en: string | null;
    third_name_en: string | null;
    family_name_en: string;
}
