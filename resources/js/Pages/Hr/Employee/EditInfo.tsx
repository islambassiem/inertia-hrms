import Section from '@/components/Hr/Employee/Section';
import AppLayout from '@/Layouts/AppLayout';
import EmployeeLayout from '@/Layouts/Hr/EmployeeLayout';
import { EmployeeData, EmployeeName } from '@/types/hr';
import { t } from 'i18next';
import TextInput from '@/components/ui/TextInput';
import { useForm } from '@inertiajs/react';
import React from 'react';
import Select from '@/components/ui/Select';

const EditInfo = ({
    employee,
    name,
}: {
    employee: EmployeeData;
    name: EmployeeName;
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
    console.log(data);

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
                            />
                            <TextInput
                                label={t('Middle Name')}
                                name="middle_name_ar"
                                value={data.middle_name_ar}
                                onChange={(e) => {
                                    setData('middle_name_ar', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Third Name')}
                                name="third_name_ar"
                                value={data.third_name_ar}
                                onChange={(e) => {
                                    setData('third_name_ar', e.target.value);
                                }}
                            />
                            <TextInput
                                label={t('Family Name')}
                                required
                                name="family_name_ar"
                                value={data.family_name_ar}
                                onChange={(e) => {
                                    setData('family_name_ar', e.target.value);
                                }}
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
                                items={[
                                    { id: '1', name: t('Male') },
                                    { id: '2', name: t('Female') },
                                ]}
                                checked={data.gender}
                                onChange={(v) => setData('gender', v)}
                                name="gender"
                            />
                        </Section>
                        <input type="submit" value={t('Save')} />
                    </form>
                </div>
            </EmployeeLayout>
        </AppLayout>
    );
};

export default EditInfo;
