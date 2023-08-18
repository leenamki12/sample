import { ReactNode } from 'react';

import { XMarkIcon } from '@heroicons/react/20/solid';

import * as S from './PrivacyModal.styled';

type Props = {
    title: string;
    children: ReactNode;
    close: () => void;
};

function PrivacyModal({ title, children, close }: Props) {
    return (
        <>
            <S.TitleBox>
                <strong>{title}</strong>
                <S.Close>
                    <button type="button" onClick={close}>
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </S.Close>
            </S.TitleBox>
            <S.TextBox>{children}</S.TextBox>
        </>
    );
}

export default PrivacyModal;
