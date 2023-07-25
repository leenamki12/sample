import { Head } from '@inertiajs/react';

import Logo from '@assets/common/logo.svg';

export default function Home() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center space-y-10 bg-gray-100">
            <Head title="Welcome" />
            <img src={Logo} />
            <div className="h-3/5 w-3/5 rounded-2xl bg-white shadow-lg">123</div>
        </div>
    );
}
