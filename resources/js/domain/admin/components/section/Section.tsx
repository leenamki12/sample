import { ReactNode } from 'react';

import * as S from './Section.styled';

type Props = {
    children: ReactNode;
    title?: string;
};

function Section({ children, title }: Props) {
    return (
        <S.Wrapper>
            {title && <S.Title>{title}</S.Title>}
            {children}
        </S.Wrapper>
    );
}

export default Section;
