import React, { PropsWithChildren, ReactElement, useMemo } from 'react';

import { usePage } from '@inertiajs/react';

import { PageProps, StrKeyArray } from '@/types';
import { User } from '@/types/user';

import AdminLayout from './admin/AdminLayout';
import CompanyLayout from './company/CompanyLayout';
import HospitalLayout from './hospital/HospitalLayout';

type Props = {
    children: ReactElement;
    name: string;
};

const Layouts: StrKeyArray<React.ComponentType<PropsWithChildren<{ user: User }>>> = {
    admin: AdminLayout,
    hospital: HospitalLayout,
    company: CompanyLayout,
};

function ConnectLayout({ children, name }: Props) {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;
    const Layout = useMemo(() => {
        if (user) {
            return Layouts[user.roles[0]];
        }
        return 'div';
    }, [name, user]);

    return React.createElement(Layout, { user: user }, children);
}

export default ConnectLayout;
