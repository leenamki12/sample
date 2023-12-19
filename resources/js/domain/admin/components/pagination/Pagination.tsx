import { useMemo } from 'react';

import { router } from '@inertiajs/react';

import { Paginate } from '@/types/common';

import * as S from './Pagination.styled';

type Props<T> = {
    datas: Paginate<T>;
};

function Pagination<T>({ datas }: Props<T>) {
    const linkItems = useMemo(() => {
        return datas.links.slice(1, -1);
    }, [datas]);

    const handleClickLink = (url: string | null) => {
        if (url) router.visit(url);
    };

    return (
        <S.Wrapper>
            <S.PrevBox>
                {datas.prev_page_url && (
                    <S.ArrowLink onClick={() => handleClickLink(datas.prev_page_url)}>
                        <S.PrevIcon aria-hidden="true" />
                        이전
                    </S.ArrowLink>
                )}
            </S.PrevBox>
            <S.NumberBox>
                {linkItems.map((item, index) => {
                    return item.url ? (
                        <S.NumLink
                            onClick={() => handleClickLink(item.url)}
                            key={item.url}
                            isActive={item.active}
                        >
                            {item.label}
                        </S.NumLink>
                    ) : (
                        <S.NumDotted key={`${item.url}${index}`}>...</S.NumDotted>
                    );
                })}
            </S.NumberBox>
            <S.NextBox>
                {datas.next_page_url && (
                    <>
                        <S.ArrowLink hasNext onClick={() => handleClickLink(datas.next_page_url)}>
                            다음
                            <S.NextIcon aria-hidden="true" />
                        </S.ArrowLink>
                    </>
                )}
            </S.NextBox>
        </S.Wrapper>
    );
}

export default Pagination;
