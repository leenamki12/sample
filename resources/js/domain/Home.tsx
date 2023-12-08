import { Head } from '@inertiajs/react';

import * as S from './Home.styled';

export default function Home() {
    return (
        <S.Wrapper>
            <Head title="Welcome" />
            페스티벌 · 공연 기획사 원더로크는 단순 소비재를 넘어 자기 표현의 수단이 되는(PROUDABLE)
            콘텐츠를 만듭니다. 오프라인의 의미와 영역을 확장하며, 생산자-소비자 모두를 향해 뻗어
            나가는 지속가능한 음악 콘텐츠를 구현합니다.
        </S.Wrapper>
    );
}
