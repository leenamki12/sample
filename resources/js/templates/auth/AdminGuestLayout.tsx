import { PropsWithChildren } from 'react';

function AdminGuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#f9f9f9]">
            {children}
        </div>
    );
}

export default AdminGuestLayout;
