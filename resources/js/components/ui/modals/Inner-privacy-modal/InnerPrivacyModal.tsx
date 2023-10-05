import { ReactNode } from 'react';

import { XMarkIcon } from '@heroicons/react/20/solid';

import * as S from './InnerPrivacyModal.styled';

type Props = {
    title: string;
    children: ReactNode;
    onClose: () => void;
};

export default function InnerPrivacyModal({ title, children, onClose }: Props) {
    return (
        <>
            <S.TitleBox>
                <strong>{title}</strong>
                <S.Close>
                    <button type="button" onClick={onClose}>
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </S.Close>
            </S.TitleBox>
            <S.TextBox>{children}</S.TextBox>
        </>
    );
}
