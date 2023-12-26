import { ReactNode } from 'react';

import * as S from './TopSection.styled';

type Props = {
    title: string;
    children?: ReactNode;
};

function TopSection({ children, title }: Props) {
    return (
        <>
            <div className="flex">
                {title && <S.Title>{title}</S.Title>}
                {children}
            </div>
            <S.Divider />
        </>
    );
}

export default TopSection;
