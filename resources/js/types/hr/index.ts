export interface Employee {
    id: number;
    empid: number;
    image: string;
    email: string | null;
    official_email: string;
    phone: string | null;
    mobile: string | null;
    personal_email: string | null;
    passport: Idnetification;
    identification: Idnetification;
    bank: Bank;
    address: NationalAddress;
    emergency_contacts: EmergencyContacts[];
    gender: Resource;
    marital_status: Resource;
    first_name_ar: string;
    middle_name_ar: string | null;
    third_name_ar: string | null;
    family_name_ar: string;
    first_name_en: string;
    middle_name_en: string | null;
    third_name_en: string | null;
    family_name_en: string;
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
    nationality: Resource;
    sponsorship: string;
    categories: Resource[];
    positions: Position[];
    departments: Resource[];
    qualification: Resource[];
    entities: Resource[];
    colleges: Resource[];
    head: Employee;
    insurance_class: Resource;
}

export interface Idnetification {
    id_number: string;
    place_of_issue: string | null;
    date_of_issue: string | null;
    date_of_expiry: string | null;
}

export interface Bank {
    data: {
        account: number;
        bank: Resource;
    };
}

export interface NationalAddress {
    data: {
        building_number: string;
        city: string;
        district: string;
        postal_code: string;
        secondary_number: string;
        street: string;
        short_address: string;
    };
}

export interface EmergencyContacts {
    data:
        | {
              name: string;
              mobile: string;
              email: string;
              relation: string;
          }[]
        | null;
}

export interface Position extends Resource {
    start_date: string;
    end_date: string | null;
    is_current: boolean;
}

export interface Qualification {
    city: string | null;
    created_at: string | null;
    gpa: number | null;
    gpa_type: Resource;
    graduation_college: string | null;
    graduation_country: number | null;
    graduation_date: string | null;
    graduation_university: string | null;
    id: string;
    is_active: boolean;
    is_attested: boolean;
    major: Resource;
    minor: Resource;
    qualification: Resource;
    rating: Resource;
    study_nature: Resource;
    thesis: string | null;
    updated_at: string | null;
}

export interface AcademicExperience {
    id: string;
    position: string | null;
    institution: Resource | null;
    city: Resource | null;
    section: Resource | null;
    major: Resource | null;
    minor: Resource | null;
    employment_number: string | null;
    academic_rank: Resource | null;
    professional_rank: Resource | null;
    hiring_date: string | null;
    joining_date: string | null;
    resignation_date: string | null;
    appointment_type: Resource | null;
    employment_status: Resource | null;
    tasks: string | null;
    job_nature: Resource | null;
    accommodation_status: Resource | null;
}

export interface Experience {
    id: string;
    profession: string | null;
    organization_name: string | null;
    city: string | null;
    country: Resource | null;
    department: string | null;
    section: string | null;
    start_date: string | null;
    end_date: string | null;
    functional_tasks: string | null;
}

export interface Achievement {
    id: string;
    title: string | null;
    donor: string | null;
    year: string | null;
}

export interface Research {
    id: string;
    type: Resource | null;
    status: Resource | null;
    progress: Resource | null;
    nature: Resource | null;
    domain: Resource | null;
    citation: Resource | null;
    language: Resource | null;
    title: string | null;
    publication_location: string | null;
    publication_date: string | null;
    publisher: string | null;
    edition: string | null;
    isbn: string | null;
    magazine: string | null;
    publishing_url: string | null;
    summary: string | null;
    key_words: string | null;
    pages_number: string | null;
}

export interface Course {
    id: string;
    name: string | null;
    type: Resource | null;
    issuer: string | null;
    date_of_issue: string | null;
    period: string | null;
    city: string | null;
    Country: Resource | null;
}

export interface Salary {
    id: string;
    basic: number;
    housing: number | null;
    transportation: number | null;
    food: number | null;
    package: number;
    effective: string;
}

export interface EmployeeData {
    data: Employee;
}

export interface Contract {
    joining_date: string;
    resingnation_date: string | null;
    positions: Position[];
}
export interface ResourceList {
    data: Resource[];
}

export interface Resource {
    id: number;
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
