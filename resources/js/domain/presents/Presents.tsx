import { InnerContainer, SubTitle } from '@/components/layouts';
import { Button } from '@/components/ui';
import TitleIcon01 from '@assets/pages/icon_present01.svg';
import TitleIcon02 from '@assets/pages/icon_present02.svg';

import { ContactContent } from '../contact/components';

import * as S from './Presents.styled';

function Presents() {
    return (
        <S.Wrapper>
            <SubTitle title="PRESENTS" />
            {/* THE GLOW 2024 start */}
            <S.Section>
                <InnerContainer>
                    <S.TitleBox>
                        <S.TitleIcon>
                            <img src={TitleIcon01} alt="" />
                        </S.TitleIcon>
                        <S.Title>THE GLOW 2024</S.Title>
                    </S.TitleBox>
                    <S.GlowContent>
                        새로운 공간에서 즐기는 빛의 향연 모두가 꿈꾸던 환상, <br />
                        압도적인 경험, 그리고 눈을 뗄 수 없는 라인업 <br />
                        등장부터 활약까지 새로운 음악 페스티벌의 탄생
                    </S.GlowContent>
                    <S.GreenText>The Glow 2024 2024 04.13-14 at KINTEX</S.GreenText>
                    <S.ButtonBox>
                        <Button
                            element="border"
                            label="Buy Ticket"
                            onClick={() => alert('준비중 입니다.')}
                        ></Button>
                    </S.ButtonBox>
                </InnerContainer>
            </S.Section>
            {/* THE GLOW 2024 end */}
            {/* Venue Business start */}
            <S.Section>
                <InnerContainer>
                    <S.TitleBox>
                        <S.TitleIcon>
                            <img src={TitleIcon02} alt="" />
                        </S.TitleIcon>
                        <S.Title>Venue Business</S.Title>
                    </S.TitleBox>
                    <S.VenueContent>
                        <strong>원더로크 오프라인 공연장</strong>
                        <p>
                            신규 공연장 사업
                            <br />
                            대관 및 콘텐츠 기획
                        </p>
                    </S.VenueContent>
                    <S.GreenText>2024, Coming Soon</S.GreenText>
                    <S.ButtonBox>
                        <Button
                            element="border"
                            label="대관문의"
                            onClick={() => alert('준비중 입니다.')}
                        ></Button>
                    </S.ButtonBox>
                </InnerContainer>
            </S.Section>
            {/* Venue Business end */}
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}

export default Presents;
