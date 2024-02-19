import { useHeader } from '@/templates/AppLayout';
import { Head } from '@inertiajs/react';

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
