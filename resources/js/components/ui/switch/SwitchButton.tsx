import { useEffect, useState } from 'react';

import * as S from './SwitchButton.styled';

type Props = {
    defaultValue: boolean;
    onChange: (value: boolean) => void;
};

export default function SwitchButton({ defaultValue = false, onChange }: Props) {
    const [enabled, setEnabled] = useState(defaultValue);

    useEffect(() => {
        onChange(enabled);
    }, [enabled]);
    return (
        <S.Wrapper active={enabled}>
            <S.SwitchWrap checked={enabled} onChange={setEnabled}>
                <span className="sr-only">해당 공연 노출 여부</span>
                <S.SwichRounded active={enabled}>
                    <S.SwichInnerActive active={enabled} aria-hidden="true">
                        <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                            <path
                                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </S.SwichInnerActive>
                    <S.SwichInnerInactive active={enabled} aria-hidden="true">
                        <svg
                            className="h-3 w-3 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </S.SwichInnerInactive>
                </S.SwichRounded>
            </S.SwitchWrap>
        </S.Wrapper>
    );
}
