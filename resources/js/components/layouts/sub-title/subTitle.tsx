import { Head } from '@inertiajs/react';

import * as S from './subTitle.styled';

type Props = {
    title: string;
};

function SubTitle({ title }: Props) {
    return (
        <>
            <Head title={title} />
            <S.TitleContainer>
                <S.Title>{title}</S.Title>
            </S.TitleContainer>
        </>
    );
}

export default SubTitle;
