import { Head } from '@inertiajs/react';

import { useHeader } from '@/layouts/AppLayout';

export default function PageHeader({ title, head }: { title: string; head?: string }) {
    const { setPageHeader } = useHeader();

    setTimeout(() => {
        if (setPageHeader) {
            setPageHeader(title);
        }
    }, 0);

    return (
        <>
            <Head title={title || head} />
        </>
    );
}
