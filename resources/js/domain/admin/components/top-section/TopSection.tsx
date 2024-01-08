import { ReactNode } from 'react';

import { Button, PageHeader } from '@/components/ui';

import * as S from './TopSection.styled';

type Props = {
    title: string;
    children?: ReactNode;
    onClick?: () => void;
};

function TopSection({ children, title, onClick }: Props) {
    return (
        <>
            <PageHeader title={title} />

            <div className="flex justify-between">
                {title && <S.Title>{title}</S.Title>}
                {children}
                {onClick && (
                    <S.ButtonWrap>
                        <Button element="primary" label="등록" type="button" onClick={onClick} />
                    </S.ButtonWrap>
                )}
            </div>
            <S.Divider />
        </>
    );
}

export default TopSection;
