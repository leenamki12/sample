import { PropsWithChildren } from 'react';

function AdminGuestLayout({ children }: PropsWithChildren) {
    return (
        <div
            style={{
                padding: 24,
                minHeight: 360,
            }}
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center"
        >
            {children}
        </div>
    );
}

export default AdminGuestLayout;
