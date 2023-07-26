import { PropsWithChildren } from 'react';

import ApplicationLogo from '@/components/inertia/ApplicationLogo';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                <ApplicationLogo width="100px" />
                {children}
            </div>
        </div>
    );
}
