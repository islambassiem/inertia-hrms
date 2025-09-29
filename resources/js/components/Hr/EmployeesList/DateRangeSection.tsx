import DatePicker from '@/components/ui/DatePicker';
import { t } from 'i18next';
import { memo } from 'react';
interface DateRangeSectionProps {
    title: string;
    fromValue: string;
    toValue: string;
    // eslint-disable-next-line no-unused-vars
    onFromChange: (date: Date | null) => void;
    // eslint-disable-next-line no-unused-vars
    onToChange: (date: Date | null) => void;
}
const DateRangeSection = ({
    title,
    fromValue,
    toValue,
    onFromChange,
    onToChange,
}: DateRangeSectionProps) => {
    return (
        <section className="mb-4">
            <p className="mb-2 text-lg">{t(title)}</p>
            <div className="grid grid-cols-2 gap-4">
                <DatePicker
                    selectedDate={fromValue ? new Date(fromValue) : null}
                    onDateSelect={onFromChange}
                    placeholder={t('From')}
                    direction="start"
                />
                <DatePicker
                    selectedDate={toValue ? new Date(toValue) : null}
                    onDateSelect={onToChange}
                    placeholder={t('To')}
                    direction="end"
                />
            </div>
        </section>
    );
};

export default memo(DateRangeSection);
