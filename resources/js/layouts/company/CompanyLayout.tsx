import { PropsWithChildren, ReactNode } from 'react';

import { User } from '@/types/user';

export default function CompanyLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return <div>{children}</div>;
}
