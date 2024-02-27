import { GradientButton, PageHeader } from '@/components/ui';

import * as s from './Home.styled';

function Home() {
    return (
        <s.Wrapper>
            <PageHeader title="ABOUT" />

            <s.Inner>
                <strong>2024.04.13-14 at KINTEX</strong>
                <p>
                    새로운 공간에서 즐기는 빛의 향연,
                    <br /> 등장부터 활약까지 새로운 음악 페스티벌의 탄생
                </p>
                <GradientButton label="LINE-UP 확인하기" />
            </s.Inner>
        </s.Wrapper>
    );
}

export default Home;
