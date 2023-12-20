import { PropsWithChildren } from 'react';

import * as S from './Table.styled';

function Td({ children }: PropsWithChildren) {
    return <S.Td>{children}</S.Td>;
}

export default Td;
