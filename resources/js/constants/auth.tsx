import { FaUser, FaUsersCog, FaUserTie } from 'react-icons/fa';

const roles = {
    employee: {
        key: 'employee',
        role: 'employee',
        title: 'Employee Account',
        subtitle: 'Manage your account',
        href: '/dashboard',
        icon: <FaUser className="text-2xl text-surface" />,
        color: 'bg-primary',
    },
    hr: {
        key: 'hr',
        role: 'hr',
        title: 'Human Resources Account',
        subtitle: 'Manage all employees',
        href: '/hr.employees',
        icon: <FaUsersCog className="text-2xl text-surface" />,
        color: 'bg-primary',
    },
    head: {
        key: 'head',
        role: 'head',
        title: 'Department Head Account',
        subtitle: 'Manage your department and subordinates',
        href: '/head.dashboard',
        icon: <FaUserTie className="text-2xl text-surface" />,
        color: 'bg-primary',
    },
};

export default roles;
