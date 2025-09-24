import { Link } from '@inertiajs/react';
import { t } from 'i18next';

type PaginationProps = {
    links: {
        url?: string;
        label: string;
        active: boolean;
    }[];
    from: number;
    to: number;
    total: number;
};

const Pagination = ({ links, from, to, total }: PaginationProps) => {
    return (
        <div className="p-6 px-4 flex items-center justify-between text-ash-700 dark:text-ash-200">
            <div>
                {links.map((link, index) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 items-center hover:text-primary-500 hover:font-bold hover:scale-110 ${
                                link.active ? 'text-primary-500 font-bold' : ''
                            }`}
                        />
                    ) : (
                        <span
                            key={index}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-ash-300"
                        />
                    )
                )}
            </div>
            <div>
                {t('Showing')} {from} {t('to')} {to} {t('of')} {total}
            </div>
        </div>
    );
};

export default Pagination;
