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
        </S.Wrapper>
    );
}
