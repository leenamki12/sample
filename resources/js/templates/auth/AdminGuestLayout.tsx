import { PropsWithChildren } from 'react';

function AdminGuestLayout({ children }: PropsWithChildren) {
    return (
        <div className="fixed left-0 top-0 flex min-h-full w-full flex-col bg-gray-50">
            <div className="flex min-h-full flex-1 flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
                <h2 className="mb-[30px] mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    관리자 로그인
                </h2>
                {children}
            </div>
        </div>
    );
}

export default AdminGuestLayout;
