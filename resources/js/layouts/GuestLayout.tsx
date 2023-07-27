import { PropsWithChildren } from 'react';

import * as S from './styles/GuestLayout.styled';

export default function Guest({ children }: PropsWithChildren) {
    return <S.Wrapper>{children}</S.Wrapper>;
}
