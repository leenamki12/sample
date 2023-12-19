import { ReactNode } from 'react';

import * as S from './InnerContainer.styled';

type Props = {
    children: ReactNode;
} & S.StyleProps;

function InnerContainer({ children, isMobileFull }: Props) {
    return <S.Wrapper isMobileFull={isMobileFull}>{children}</S.Wrapper>;
}

export default InnerContainer;
