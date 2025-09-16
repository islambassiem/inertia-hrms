const roles = {
    employee: {
        key: 'employee',
        role: 'employee',
        title: 'Employee Account',
        subtitle: 'Manage your account',
        href: '/dashboard',
        icon: '<User />',
    },
    hr: {
        key: 'hr',
        role: 'hr',
        title: 'Human Resources Account',
        subtitle: 'Manage all employees',
        href: '/hr.employees',
    },
    head: {
        key: 'head',
        role: 'head',
        title: 'Department Head Account',
        subtitle: 'Manage your department and subordinates',
        href: '/head.dashboard',
    },
};

export default roles;
