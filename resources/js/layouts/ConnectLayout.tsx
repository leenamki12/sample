import React, {
    PropsWithChildren,
    ReactElement,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react';

import { usePage } from '@inertiajs/react';

import { PageProps, StrKeyArray } from '@/types';
import { User } from '@/types/user';

import AdminGuestLayout from './admin/AdminGuestLayout';
import AdminLayout from './admin/AdminLayout';
import GuestLayout from './guest/GuestLayout';

type Props = {
    children: ReactElement;
    name: string;
};

type ContextProps = {
    header: string;
    setHeader: React.Dispatch<React.SetStateAction<string>>;
};

const Layouts: StrKeyArray<React.ComponentType<PropsWithChildren<{ user: User }>>> = {
    admin: AdminLayout,
};

const HeaderStateContext = createContext<ContextProps | undefined>(undefined);

function ConnectLayout({ children, name }: Props) {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;
    const [header, setHeader] = useState<string>('');

    const Layout = useMemo(() => {
        if (user && name.startsWith('admin/')) {
            return Layouts[user.roles[0]];
        }
        if (props.layout === 'admin') {
            return AdminGuestLayout;
        }
        return GuestLayout;
    }, [user]);

    return (
        <HeaderStateContext.Provider value={{ header, setHeader }}>
            {React.createElement(Layout, { user: user }, children)}
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

export default ConnectLayout;
