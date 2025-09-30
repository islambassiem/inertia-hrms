import NoRecords from '@/components/ui/NoRecords';
import { useLanguage } from '@/hooks/useLanguage';
import { dateFormatter } from '@/lib/utils';
import { Employee } from '@/types/hr';
import { Link } from '@inertiajs/react';
import { t } from 'i18next';
import { toast } from 'react-toastify';
import { show } from '@/actions/App/Http/Controllers/Hr/EmployeeController';

const colums = [
    'National ID',
    'Nationality',
    'Date of Birth',
    'Sponsorship',
    'Department',
    'Category',
    'Joining Date',
    'Resignation Date',
];

function EmployeeRow({ employee, idx }: { employee: Employee; idx: number }) {
    const { language } = useLanguage();

    const evenClass =
        idx % 2 === 0
            ? 'bg-ash-200 dark:bg-ash-700'
            : 'bg-ash-100 dark:bg-ash-600';

    const handleToast = (text: string) => {
        window.navigator.clipboard.writeText(text).then(() => {
            toast.success(text);
        });
    };

    return (
        <>
            <tr
                key={employee.id}
                className={`group p-2 ${evenClass} ${employee.is_active ? '' : 'text-danger-500'} sticky`}
            >
                <td
                    className={`p-2 ${evenClass} sticky left-0 rtl:left-auto rtl:right-0 z-30`}
                >
                    <Link
                        href={show(employee.id).url}
                        className={`hover:underline font-bold ${employee.is_active ? '' : 'text-danger-500'}`}
                    >
                        {employee.empid}
                    </Link>
                </td>
                {/* Fixed width and proper text truncation */}
                <td
                    className={`p-2 text-sm sticky left-[70px] rtl:left-auto rtl:right-[70px] w-64 ${evenClass} `}
                >
                    <div className="flex gap-2">
                        <img
                            src={employee.image}
                            alt={employee.name_en}
                            className="size-15 p-2 rounded-3xl flex-shrink-0"
                        />
                        <div className="flex flex-col min-w-0 flex-1">
                            <button
                                onClick={() => handleToast(employee.name_ar)}
                                className={`relative font-fustat cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right ${employee.is_active ? '' : 'text-danger-500'}`}
                            >
                                {employee.name_ar}
                            </button>
                            <button
                                className={`relative cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right ${employee.is_active ? '' : 'text-danger-500'}`}
                                onClick={() => handleToast(employee.name_en)}
                            >
                                {employee.name_en}
                            </button>
                            <button
                                onClick={() => handleToast(employee.email)}
                                className={`font-playfair text-muted relative cursor-pointer transition-colors duration-300 truncate text-left rtl:text-right ${employee.is_active ? '' : 'text-danger-500'}`}
                            >
                                {employee.email}
                            </button>
                        </div>
                    </div>
                </td>
                <td className="px-4">
                    <button
                        className="cursor-pointer hover:text-primary-500 transition-colors duration-300"
                        onClick={() => handleToast(employee.identification)}
                    >
                        {employee.identification}
                    </button>
                </td>
                <td className="px-4">{employee.nationality}</td>
                <td className="px-4">
                    {new Date(employee.date_of_birth).toLocaleDateString(
                        language,
                        {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                        }
                    )}
                </td>
                <td className="px-4">{employee.sponsorship}</td>
                <td className="px-4">
                    {Array.isArray(employee.departments)
                        ? employee.departments
                              .map(
                                  (department: { id: number; name: string }) =>
                                      department.name
                              )
                              .join(', ')
                        : ''}
                </td>
                <td className="px-4">
                    {Array.isArray(employee.categories)
                        ? employee.categories
                              .map(
                                  (category: { id: number; name: string }) =>
                                      category.name
                              )
                              .join(', ')
                        : ''}
                </td>
                <td className="px-4">
                    {dateFormatter(employee.joining_date, language)}
                </td>
                <td className="px-4">
                    {dateFormatter(employee.resignation_date, language)}
                </td>
            </tr>
        </>
    );
}

function Table({ employees }: { employees: { data: Employee[] } }) {
    return (
        <>
            <table className="p-2 table-auto border-collapse w-full">
                <thead className="border-b-2 sticky top-0 left-0 rtl:left-auto rtl:right-0 z-10">
                    <tr className="min-h-11 surface">
                        <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right sticky top-0 left-0 rtl:left-auto rtl:right-0 z-20 surface">
                            #
                        </th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right sticky top-0 left-[70px] rtl:left-auto rtl:right-[70px] z-20 w-64 surface">
                            {t('Employee')}
                        </th>
                        {colums.map((col) => (
                            <th
                                className="p-3 text-sm font-semibold tracking-wide text-left rtl:text-right"
                                key={col}
                            >
                                {t(col)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-ash-100 dark:divide-ash-800">
                    {employees.data.map((employee, idx) => (
                        <EmployeeRow
                            key={employee.id}
                            employee={employee}
                            idx={idx}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

const EmployeesTable = ({ employees }: { employees: { data: Employee[] } }) => {
    return (
        <section className="overflow-x-auto border-collapse whitespace-nowrap rounded-lg shadow-lg mt-5 max-h-10/12">
            {employees.data.length > 0 ? (
                <Table employees={employees} />
            ) : (
                <NoRecords
                    message={t('There are not record matching this criteria')}
                />
            )}
        </section>
    );
};

export default EmployeesTable;
