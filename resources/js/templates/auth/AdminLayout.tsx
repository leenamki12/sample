import { ReactNode } from 'react';

import * as S from './AdminLayout.styled';

type Props = {
    children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
    return <S.Wrapper>{children}</S.Wrapper>;
}
