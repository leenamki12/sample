import { useEffect, useMemo, useRef, useState } from 'react';

import { router, usePage } from '@inertiajs/react';

import { Paginate } from '@/types/common';

import * as S from './Pagination.styled';

type Props<T> = {
    datas: Paginate<T>;
};

function Pagination<T>({ datas }: Props<T>) {
    const allData = useRef(datas);

    const [dataLength, setDataLength] = useState(4);

    const load = () => {
        if (datas.next_page_url === null) return;

        router.get(
            datas.next_page_url,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                replace: false,
                only: ['performances'],
                onSuccess: () => {
                    //allData.current.data.push(...datas.data);

                    console.log(allData, datas);
                },
            }
        );
    };

    const handleClickLink = () => {
        load();
        setDataLength(dataLength + 4);
        console.log('click', allData, datas, dataLength);
    };

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries =>
    //         entries.forEach(entry => entry.isIntersecting && load())
    //     );

    //     const bottomElement = document.getElementById('contact');

    //     if (bottomElement) {
    //         observer.observe(bottomElement);
    //     }

    //     return () => {
    //         if (bottomElement) {
    //             observer.unobserve(bottomElement);
    //         }
    //         console.log('allData.current.data', allData.current.data);
    //     };
    // }, []);

    return (
        <S.Wrapper>
            <button onClick={() => handleClickLink()}>more</button>
        </S.Wrapper>
    );
}

export default Pagination;
