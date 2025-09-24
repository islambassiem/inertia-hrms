import { CardProps } from '@/types/auth';
import { Link } from '@inertiajs/react';
import { t } from 'i18next';

const RoleCard = ({ card }: CardProps) => {
    return (
        <Link
            key={card.key}
            href={card.href}
            className="group block rounded-xl shadow-2xl transition p-6 bg"
        >
            <div className="flex items-center gap-4">
                <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg ${card.color}`}
                >
                    {card.icon}
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="font-semibold">{t(card.title)}</h2>
                    <p className="text-sm">{t(card.subtitle)}</p>
                </div>
            </div>
        </Link>
    );
};

export default RoleCard;
