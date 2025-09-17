import { useClickOutSide } from '@/hooks/useClickOutside';
import { AuthUser } from '@/types/auth';
import { Link, usePage } from '@inertiajs/react';
import { t } from 'i18next';
import { Power } from 'lucide-react';
import { useRef } from 'react';
import { FaUser, FaUsersCog, FaUserTie } from 'react-icons/fa';

interface ProfileProps {
    isActive: boolean;
    onShow: () => void;
}

const Profile = ({ isActive, onShow }: ProfileProps) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const { auth } = usePage<AuthUser>().props;

    useClickOutSide(menuRef, isActive, onShow);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => onShow()}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                <img
                    src={auth.data.image}
                    alt="avatar"
                    className="size-12 rounded-full"
                />
            </button>

            {isActive && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-800 ring-opacity-5 z-50">
                    {auth && (
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 flex-1 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FaUser />
                            {t('My Account')}
                        </Link>
                    )}
                    {auth.data.roles.includes('hr') && (
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 flex-1 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FaUsersCog />
                            {t('HR')}
                        </Link>
                    )}
                    {auth.data.roles.includes('head') && (
                        <Link
                            href={'/profile'}
                            className="flex items-center gap-4 flex-1 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FaUserTie />
                            {t('Depaertment Head')}
                        </Link>
                    )}
                    <hr />
                    <Link
                        href={'/logout'}
                        method="post"
                        className="flex items-center gap-4 flex-1 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Power />
                        {t('Logout')}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Profile;
