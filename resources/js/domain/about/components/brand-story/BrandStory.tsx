import { ReactNode } from 'react';

import * as S from './BrandStory.styled';

type Props = {
    logoImage: string;
    children: ReactNode;
} & S.StyleProps;

function BrandStory({ logoImage, children, backgroundImage }: Props) {
    return (
        <>
            <S.ImageBox backgroundImage={backgroundImage}>
                <div>
                    <img src={logoImage} alt="" />
                </div>
            </S.ImageBox>
            <S.TextBox>{children}</S.TextBox>
        </>
    );
}

export default BrandStory;
