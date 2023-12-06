import { Head } from '@inertiajs/react';

import * as S from './Home.styled';

export default function Home() {
    return (
        <S.Wrapper>
            <Head title="Welcome" />
            메인페이지
        </S.Wrapper>
    );
}
