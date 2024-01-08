import { useEffect, useMemo, useRef } from 'react';

import { router, usePage } from '@inertiajs/react';

import { Paginate } from '@/types/common';

import * as S from './Pagination.styled';

type Props<T> = {
    datas: Paginate<T>;
};

function Pagination<T>({ datas }: Props<T>) {
    const allData = useRef(datas);

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
                    allData.current.data.push(...datas.data);

                    console.log(allData, datas);
                },
            }
        );
    };

    const handleClickLink = () => {
        load();
        console.log('click', allData, datas);
    };

    return (
        <S.Wrapper>
            <button onClick={() => handleClickLink()}>more</button>
        </S.Wrapper>
    );
}

export default Pagination;
