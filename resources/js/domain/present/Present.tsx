import { InnerContainer, SubTitle } from '@/components/layouts';

import { ContactContent } from '../contact/components';

import * as S from './Present.styled';

function Present() {
    return (
        <S.Wrapper>
            <SubTitle title="PRESENT" />
            {/* THE GLOW 2024 start */}
            <S.Section>
                <InnerContainer>
                    <S.Title>THE GLOW 2024</S.Title>
                </InnerContainer>
            </S.Section>
            {/* THE GLOW 2024 end */}
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}

export default Present;
