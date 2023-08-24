import { ChangeEvent } from 'react';

import { Checkbox } from '@/components/ui';

import * as S from './PrivacyCheckItem.styled';

type Props = {
    id: string;
    children: string;
    onChangeChecked?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickButton?: () => void;
};

function PrivacyCheckItem({ id, children, onClickButton, onChangeChecked }: Props) {
    return (
        <S.Item>
            <label htmlFor={id}>
                <Checkbox id={id} onChange={event => onChangeChecked?.(event)} />
                <span>{children}</span>
            </label>
            <button type="button" onClick={onClickButton}>
                내용보기
            </button>
        </S.Item>
    );
}

export default PrivacyCheckItem;
