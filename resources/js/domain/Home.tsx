import { useEffect, useRef } from 'react';

import { Head } from '@inertiajs/react';
import gsap from 'gsap';

import Logo from '@assets/common/header_logo.svg';
import MoreIcon from '@assets/common/icon_more.svg';

import * as S from './Home.styled';

export default function Home() {
    const slideRef = useRef<HTMLDivElement>(null);
    const slideRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let t1 = gsap.timeline();
        t1.to(slideRef.current, {
            duration: 80,
            repeat: -1,
            x: '-6300px',
            ease: 'none',
        });
        let t2 = gsap.timeline();
        t2.to(slideRef2.current, {
            duration: 80,
            repeat: -1,
            x: '6300px',
            ease: 'none',
        });
    }, []);
    return (
        <S.Wrapper>
            <Head title="Welcome" />
            <S.LogoWrap>
                <img src={Logo} alt="" />
            </S.LogoWrap>
            <S.AlbumWrap>
                <S.AlbumContent ref={slideRef}>
                    <div className="flex items-center">
                        <S.AlbumList>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                        </S.AlbumList>
                        <S.AlbumList>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                        </S.AlbumList>
                    </div>
                </S.AlbumContent>
                <S.AlbumContent ref={slideRef2}>
                    <div className="flex items-center justify-end">
                        <S.AlbumList>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                        </S.AlbumList>
                        <S.AlbumList>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                            <S.AlbumItem></S.AlbumItem>
                        </S.AlbumList>
                    </div>
                </S.AlbumContent>
                <S.More>
                    <S.MoreButton>
                        more info
                        <img src={MoreIcon} alt="" />
                    </S.MoreButton>
                </S.More>
            </S.AlbumWrap>
            <S.BusinessWrap>
                <S.InnerWrap>
                    <S.Title>Business</S.Title>
                    <S.BusinessContent>
                        페스티벌 · 공연 기획사 원더로크는 단순 소비재를 넘어
                        <br /> 자기 표현의 수단이 되는(PROUDABLE) 콘텐츠를 만듭니다.
                        <br /> 오프라인의 의미와 영역을 확장하며,생산자-소비자 모두를 향해 뻗어
                        나가는
                        <br /> 지속가능한 음악 콘텐츠를 구현합니다.
                    </S.BusinessContent>
                </S.InnerWrap>
            </S.BusinessWrap>
            <S.ContactWrap>
                <S.InnerWrap>
                    <S.Title>Contact</S.Title>
                    <S.ContactContent>
                        <p>
                            <strong>WanderLoch Inc.</strong>
                        </p>
                        <p>
                            <strong>Head Quarters</strong> 서울특별시 강남구 강남대로 302, B1 | B1,
                            302 Gangnam-daero, Gangnam-gu,
                        </p>
                        <p>
                            <strong>Seoul Branch</strong> 서울특별시 마포구 와우산로33길 27, B1 |
                            B1, 27 Wausanro33-gil, Mapo-gu, Seoul
                        </p>
                    </S.ContactContent>
                    <S.ContactContent>
                        <span>협업 및 공연문의 hello@wanderloch.com</span>
                        <ul>
                            <li>
                                <a href="">Instagram</a>
                            </li>
                            <li>
                                <a href="">X</a>
                            </li>
                        </ul>
                    </S.ContactContent>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.97884390971!2d126.92630407636155!3d37.555562224756535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98c1c0b8e3d7%3A0x9ae20b8f07a4bab0!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDsmYDsmrDsgrDroZwzM-q4uCAyNw!5e0!3m2!1sko!2skr!4v1702274741354!5m2!1sko!2skr"
                        className="w-full max-w-[1200px]"
                        height="520"
                        loading="lazy"
                    ></iframe>
                </S.InnerWrap>
            </S.ContactWrap>
        </S.Wrapper>
    );
}
