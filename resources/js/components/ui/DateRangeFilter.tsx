import DatePicker from './DatePicker';

type DateRangeFilterProps = {
    label: string;
    from: string | null;
    to: string | null;
    // eslint-disable-next-line no-unused-vars
    onChange: (from: Date | null, to: Date | null) => void;
};

export function DateRangeFilter({
    label,
    from,
    to,
    onChange,
}: DateRangeFilterProps) {
    return (
        <div className="flex-1 flex flex-col">
            <h3 className="font-bold mb-2">{label}</h3>
            <div className="flex gap-2">
                <DatePicker
                    selectedDate={from}
                    onDateSelect={(date) => onChange(date, to)}
                    placeholder="From"
                    direction="start"
                    className="w-full"
                />
                <DatePicker
                    selectedDate={to}
                    onDateSelect={(date) => onChange(from, date)}
                    placeholder="To"
                    direction="end"
                    className="w-full"
                />
            </div>
        </div>
    );
}
