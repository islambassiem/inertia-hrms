import { t } from 'i18next';
import Section from './Section';
import { EmployeeData, ResourceList } from '@/types/hr';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button';
import { Save } from 'lucide-react';
import DatePicker from '@/components/ui/DatePicker';
import Select from '@/components/ui/Select';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import { useForm } from '@inertiajs/react';
import React from 'react';
import { update } from '@/actions/App/Http/Controllers/BasicInfoController';

const BasicInfoEdit = ({
    employee,
    countries,
    genders,
    maritalStatus,
}: {
    employee: EmployeeData;
    countries: ResourceList;
    genders: ResourceList;
    maritalStatus: ResourceList;
}) => {
    const { language } = useLanguage();
    const { data, setData, processing, post, errors } = useForm({
        employee_id: employee.data.id,
        first_name_ar: employee.data.first_name_ar,
        middle_name_ar: employee.data.middle_name_ar,
        third_name_ar: employee.data.third_name_ar,
        family_name_ar: employee.data.family_name_ar,
        first_name_en: employee.data.first_name_en,
        middle_name_en: employee.data.middle_name_en,
        third_name_en: employee.data.third_name_en,
        family_name_en: employee.data.family_name_en,
        gender: employee.data.gender.id,
        nationality: employee.data.nationality.id,
        marital_status: employee.data.marital_status?.id,
        mobile: employee.data.mobile,
        phone: employee.data.phone,
        email: employee.data.email,
        official_email: employee.data.official_email,
        date_of_birth: employee.data.date_of_birth,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(update(employee.data.id).url);
    };
    console.log(errors);
    return (
        <Section
            title={t('Basic Information')}
            body={t('Employee Personal Information')}
            editable={false}
        >
            <form method="post" onSubmit={handleSubmit}>
                <div>
                    <h2 className="mb-4 font-bold">{t('Name (Arabic)')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                        <TextInput
                            label={t('First Name')}
                            name="first_name_ar"
                            required
                            error={errors.first_name_ar}
                            value={data.first_name_ar}
                            onChange={(e) => {
                                setData('first_name_ar', e.target.value);
                            }}
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
                            name="family_name_ar"
                            required
                            error={errors.family_name_ar}
                            value={data.family_name_ar}
                            onChange={(e) => {
                                setData('family_name_ar', e.target.value);
                            }}
                            className="font-fustat"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 font-bold">{t('Name (English)')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                        <TextInput
                            label={t('First Name')}
                            name="first_name_en"
                            required
                            error={errors.first_name_en}
                            value={data.first_name_en}
                            onChange={(e) => {
                                setData('first_name_en', e.target.value);
                            }}
                            className="font-fustat"
                        />
                        <TextInput
                            label={t('Middle Name')}
                            name="middle_name_en"
                            value={data.middle_name_en}
                            onChange={(e) => {
                                setData('middle_name_en', e.target.value);
                            }}
                            className="font-fustat"
                        />
                        <TextInput
                            label={t('Third Name')}
                            name="third_name_en"
                            value={data.third_name_en}
                            onChange={(e) => {
                                setData('third_name_en', e.target.value);
                            }}
                            className="font-fustat"
                        />
                        <TextInput
                            label={t('Family Name')}
                            name="family_name_en"
                            required
                            error={errors.family_name_en}
                            value={data.family_name_en}
                            onChange={(e) => {
                                setData('family_name_en', e.target.value);
                            }}
                            className="font-fustat"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 font-bold">
                        {t('Personal Information')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <div className="mb-1 font-semibold flex gap-2">
                                {t('Date of Birth')}
                                <span className="text-danger-500">*</span>
                            </div>
                            <div>
                                <DatePicker
                                    selectedDate={
                                        data.date_of_birth
                                            ? new Date(data.date_of_birth)
                                            : null
                                    }
                                    onDateSelect={(v) =>
                                        setData(
                                            'date_of_birth',
                                            v
                                                ? v.toISOString().split('T')[0]
                                                : ''
                                        )
                                    }
                                    direction="start"
                                    placeholder={dateFormatter(
                                        data.date_of_birth,
                                        language
                                    )}
                                />
                                {errors.date_of_birth && (
                                    <span className="text-danger-500">
                                        {errors.date_of_birth}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <Select
                                items={countries.data}
                                checked={data.nationality}
                                title={t('Nationality')}
                                required
                                name="nationality"
                                onChange={(id) => {
                                    setData('nationality', id);
                                }}
                            />
                            <div>
                                {errors.nationality && (
                                    <span className="text-danger-500">
                                        {errors.nationality}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <Select
                                items={genders.data}
                                checked={data.gender}
                                title={t('Gender')}
                                required
                                name="gender"
                                onChange={(id) => {
                                    setData('gender', id);
                                }}
                            />
                            <div>
                                {errors.gender && (
                                    <span className="text-danger-500">
                                        {errors.gender}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <Select
                                items={maritalStatus.data}
                                checked={data.marital_status}
                                required
                                title={t('Marital Status')}
                                name="marital_status"
                                onChange={(id) => {
                                    setData('marital_status', id);
                                }}
                            />
                            <div>
                                {errors.marital_status && (
                                    <span className="text-danger-500">
                                        {errors.marital_status}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="mb-4 font-bold">
                        {t('Contact Information')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                        <TextInput
                            label={t('Email')}
                            name="email"
                            required
                            error={errors.email}
                            value={data.email}
                            onChange={(e) => {
                                setData('email', e.target.value);
                            }}
                            className="font-fustat"
                        />
                        <TextInput
                            label={t('Mobile')}
                            name="mobile"
                            required
                            error={errors.mobile}
                            value={data.mobile}
                            onChange={(e) => {
                                setData('mobile', e.target.value);
                            }}
                            className="font-fustat"
                        />
                        <TextInput
                            label={t('Official Email')}
                            name="official_email"
                            required
                            error={errors.official_email}
                            value={data.official_email}
                            onChange={(e) => {
                                setData('official_email', e.target.value);
                            }}
                            className="font-fustat"
                        />
                        <TextInput
                            label={t('Phone')}
                            name="phone"
                            value={data.phone}
                            onChange={(e) => {
                                setData('phone', e.target.value);
                            }}
                            className="font-fustat"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="btn-primary"
                        disabled={processing}
                    >
                        <Save />
                        {t('Save')}
                    </Button>
                </div>
            </form>
        </Section>
    );
};

export default BasicInfoEdit;
