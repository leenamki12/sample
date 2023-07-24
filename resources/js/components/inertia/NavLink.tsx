import { Link, InertiaLinkProps } from '@inertiajs/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={classNames(
                active
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
            )}
        >
            {children}
        </Link>
    );
}
