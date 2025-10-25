import Section from '@/components/Hr/Employee/Section';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, EmployeeName, ResourceList } from '@/types/hr';
import { t } from 'i18next';
import TextInput from '@/components/ui/TextInput';
import { useForm } from '@inertiajs/react';
import React from 'react';
import Select from '@/components/ui/Select';
import DatePicker from '@/components/ui/DatePicker';

const EditInfo = ({
    employee,
    name,
    genders,
    maritalStatus,
}: {
    employee: EmployeeData;
    name: EmployeeName;
    genders: ResourceList;
    maritalStatus: ResourceList;
}) => {
    const { data, setData } = useForm({
        //, post, processing, errors
        first_name_ar: name.first_name_ar,
        middle_name_ar: name.middle_name_ar,
        third_name_ar: name.third_name_ar,
        family_name_ar: name.family_name_ar,
        first_name_en: name.first_name_en,
        middle_name_en: name.middle_name_en,
        third_name_en: name.third_name_en,
        family_name_en: name.family_name_en,
        gender: employee.data.gender.id,
        marital_status: employee.data.marital_status?.id,
        phone_number: '',
        mobile_number: '',
        email: '',
        date_of_birth: employee.data.date_of_birth,
        identification: '',
        passport: '',
        is_active: false,
        has_salary: false,
        has_biometric: false,
        works_on_saturday: false,
        joining_date: '',
        resignation_date: '',
        has_married_contract: false,
        vacation_class: '',
        special_needs: false,
        nationality: '',
        sponsorship: '',
        categories: [],
        positions: [],
        departments: [],
        qualification: [],
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cleanData = Object.fromEntries(
            Object.entries(data).filter(([, value]) =>
                value === '' ? null : value
            )
        );
        console.log(cleanData);
    };
    console.log(employee);

    return (
        <AppLayout>
            <EmployeeLayout employee={employee}>
                <div className="bg-white dark:bg-ash-800 rounded-lg shadow-sm p-6">
                    <form onSubmit={submit}>
                        <Section title={t('Name (Arabic)')}>
                            <TextInput
                                label={t('First Name')}
                                name="first_name_ar"
                                required
                                value={data.first_name_ar}
                                onChange={(e) => {
                                    setData('first_name_ar', e.target.value);
                                }}
                                className="font-fustat"
                            />
                            <TextInput
                                label={t('Middle Name')}
                                name="middle_name_ar"
                                value={data.middle_name_ar}
                                onChange={(e) => {
                                    setData('middle_name_ar', e.target.value);
                                }}
                                className="font-fustat"
                            />
                            <TextInput
                                label={t('Third Name')}
                                name="third_name_ar"
                                value={data.third_name_ar}
                                onChange={(e) => {
                                    setData('third_name_ar', e.target.value);
                                }}
                                className="font-fustat"
                            />
                            <TextInput
                                label={t('Family Name')}
                                required
                                name="family_name_ar"
                                value={data.family_name_ar}
                                onChange={(e) => {
                                    setData('family_name_ar', e.target.value);
                                }}
                                className="font-fustat"
                            />
                        </Section>
                        <Section title={t('Name (English)')}>
                            <TextInput
                                label={t('First Name')}
                                name="first_name_en"
                                required
                                value={data.first_name_en}
                                onChange={(e) => {
                                    setData('first_name_en', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Middle Name')}
                                name="middle_name_en"
                                value={data.middle_name_en}
                                onChange={(e) => {
                                    setData('middle_name_en', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Third Name')}
                                name="third_name_en"
                                value={data.third_name_en}
                                onChange={(e) => {
                                    setData('third_name_en', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Family Name')}
                                required
                                name="family_name_en"
                                value={data.family_name_en}
                                onChange={(e) => {
                                    setData('family_name_en', e.target.value);
                                }}
                            />
                        </Section>
                        <Section title={t('Personal Details')}>
                            <Select
                                items={genders.data}
                                checked={data.gender}
                                onChange={(v) => setData('gender', v)}
                                name="gender"
                                title={t('Gender')}
                            />
                            <Select
                                items={maritalStatus.data}
                                checked={data.marital_status}
                                onChange={(v) => setData('marital_status', v)}
                                name="marital_status"
                                title={t('Marital Status')}
                            />
                            <TextInput
                                label={t('Phone Number')}
                                name="phone_number"
                                value={''}
                                onChange={(e) => {
                                    setData('phone_number', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Mobile Number')}
                                name="mobile_number"
                                value={''}
                                onChange={(e) => {
                                    setData('mobile_number', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Email Address')}
                                name="email"
                                value={''}
                                onChange={(e) => {
                                    setData('email', e.target.value);
                                }}
                            />
                            <div>
                                <h3 className="mb-2">{t('Date of Birth')}</h3>
                                <DatePicker
                                    placeholder={
                                        data.date_of_birth.toString() ??
                                        employee.data.date_of_birth
                                    }
                                    selectedDate={null}
                                    onDateSelect={(date) => {
                                        setData(
                                            'date_of_birth',
                                            date
                                                ? date
                                                      .toISOString()
                                                      .slice(0, 10)
                                                : employee.data.date_of_birth
                                        );
                                    }}
                                    direction="start"
                                />
                            </div>
                        </Section>
                        <button type="submit" className="btn-primary">
                            {t('Save')}
                        </button>
                    </form>
                </div>
            </EmployeeLayout>
        </AppLayout>
    );
};

export default EditInfo;
