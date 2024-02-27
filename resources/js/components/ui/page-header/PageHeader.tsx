import { Head } from '@inertiajs/react';

import { useHeader } from '@/templates/AppLayout';

import * as s from './PageHeader.styled';

export default function PageHeader({
    title,
    head,
    isBackground = false,
}: {
    title: string;
    head?: string;
    isBackground?: boolean;
}) {
    const { setPageHeader } = useHeader();

    setTimeout(() => {
        if (setPageHeader) {
            setPageHeader(title);
        }
    }, 0);

    return (
        <>
            <Head title={title || head} />
            <s.Wrapper isBackground={isBackground}>{title}</s.Wrapper>
        </>
    );
}
