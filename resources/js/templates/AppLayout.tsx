import React, {
    ReactElement,
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';

import { usePage } from '@inertiajs/react';

import { PageProps } from '@/types';
import { User } from '@/types/user';

import AdminGuestLayout from './auth/AdminGuestLayout';
import AdminLayout from './auth/AdminLayout';
import GuestLayout from './guest/GuestLayout';

type Props = {
    children: ReactElement;
    name: string;
};

type PageLayoutType = {
    [key: string]: React.ComponentType<{ children: ReactNode }>;
};

type ContextProps = {
    header: string;
    setHeader: React.Dispatch<React.SetStateAction<string>>;
};

const Layouts: PageLayoutType = {
    admin: AdminLayout,
};

const HeaderStateContext = createContext<ContextProps | undefined>(undefined);

export default function AppLayout({ children, name }: Props) {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;
    const [header, setHeader] = useState<string>('');

    const Layout = useMemo(() => {
        if (user && name.startsWith('admin/')) {
            const role = user.roles[0] as unknown as User;
            return Layouts[role.name];
        }
        if (props.layout === 'admin') {
            return AdminGuestLayout;
        }
        return GuestLayout;
    }, [user]);

    return (
        <HeaderStateContext.Provider value={{ header, setHeader }}>
            {React.createElement(Layout, { children })}
        </HeaderStateContext.Provider>
    );
}

export const useHeader = () => {
    const context = useContext<ContextProps | undefined>(HeaderStateContext);

    function setPageHeader(title: string) {
        if (context) {
            context.setHeader(title);
        }
    }

    return { pageTitle: context?.header, setPageHeader };
};
