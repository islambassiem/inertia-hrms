import { t } from 'i18next';
import Section from './Section';
import { Save } from 'lucide-react';
import { EmployeeData, Idnetification } from '@/types/hr';
import { useForm } from '@inertiajs/react';
import {
    update,
    store,
} from '@/actions/App/Http/Controllers/IdentificationController';
import Button from '@/components/ui/Button';
import React from 'react';
import TextInput from '@/components/ui/TextInput';
import DatePicker from '@/components/ui/DatePicker';
import { dateFormatter } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

const IdentificationEdit = ({
    employee,
    identification,
}: {
    employee: EmployeeData;
    identification: { data: Idnetification };
}) => {
    const { language } = useLanguage();

    const { data, setData, put, post, processing, errors } = useForm({
        id: identification?.data.id,
        id_number: identification?.data.id_number,
        employee_id: employee.data.id,
        place_of_issue: identification?.data.place_of_issue,
        date_of_issue: identification?.data.date_of_issue,
        date_of_expiry: identification?.data.date_of_expiry,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.id) {
            put(
                update({
                    employee: employee.data.id,
                    identification: data.id,
                }).url
            );
        } else {
            post(store(employee.data.id).url);
        }
    };

    return (
        <Section
            title={t('Identification')}
            body={t('National ID Information')}
            editable={false}
        >
            <form method="post" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-ash-200 dark:border-ash-700 rounded-lg p-6 bg-white dark:bg-ash-800 shadow-sm hover:shadow-md transition-shadow">
                    <TextInput
                        label={t('National ID')}
                        name="id_number"
                        required
                        error={errors.id_number}
                        value={data.id_number}
                        onChange={(e) => {
                            setData('id_number', e.target.value);
                        }}
                    />
                    <TextInput
                        label={t('Place of Issue')}
                        name="place_of_issue"
                        value={data.place_of_issue}
                        onChange={(e) => {
                            setData('place_of_issue', e.target.value);
                        }}
                    />
                    <div>
                        <div className="mb-1 font-semibold flex gap-2">
                            {t('Date of Issue')}
                        </div>
                        <DatePicker
                            selectedDate={
                                data.date_of_issue
                                    ? new Date(data.date_of_issue)
                                    : null
                            }
                            onDateSelect={(v) =>
                                setData(
                                    'date_of_issue',
                                    v ? v.toISOString().split('T')[0] : ''
                                )
                            }
                            direction="start"
                            placeholder={dateFormatter(
                                data.date_of_issue,
                                language
                            )}
                        />
                        {errors.date_of_issue && (
                            <span className="text-danger-500">
                                {errors.date_of_issue}
                            </span>
                        )}
                    </div>
                    <div>
                        <div className="mb-1 font-semibold flex gap-2">
                            {t('Date of Expiry')}
                            <span className="text-danger-500">*</span>
                        </div>
                        <DatePicker
                            selectedDate={
                                data.date_of_expiry
                                    ? new Date(data.date_of_expiry)
                                    : null
                            }
                            onDateSelect={(v) =>
                                setData(
                                    'date_of_expiry',
                                    v ? v.toISOString().split('T')[0] : ''
                                )
                            }
                            direction="start"
                            placeholder={dateFormatter(
                                data.date_of_expiry,
                                language
                            )}
                        />
                        {errors.date_of_expiry && (
                            <span className="text-danger-500">
                                {errors.date_of_expiry}
                            </span>
                        )}
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

export default IdentificationEdit;
