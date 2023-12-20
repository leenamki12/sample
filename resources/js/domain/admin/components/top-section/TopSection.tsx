import { PropsWithChildren } from 'react';

import * as S from './TopSection.styled';

function TopSection({ children }: PropsWithChildren) {
    return (
        <>
            <div className="flex justify-end">{children}</div>
            <S.Divider />
        </>
    );
}

export default TopSection;
