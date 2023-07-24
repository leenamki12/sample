import { PropsWithChildren, ReactNode } from 'react';

import { User } from '@/types/user';

export default function HospitalLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return <div>{children}</div>;
}
