import { ChangeEvent } from 'react';

import { Checkbox } from '@/components/ui';

import * as S from './PrivacyCheckItem.styled';

type Props = {
    id: string;
    label: string;
    checked?: boolean;
    error?: string;
    onClick?: (e: React.MouseEvent) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

function PrivacyCheckItem({ id, label, checked, error, onClick, onChange }: Props) {
    return (
        <div>
            <S.Wrapper>
                <label htmlFor={id}>
                    <Checkbox id={id} checked={checked} onChange={onChange} />
                    <span>{label}</span>
                </label>
                <button onClick={onClick} type="button">
                    내용보기
                </button>
            </S.Wrapper>
            {error && <S.Error>{error}</S.Error>}
        </div>
    );
}

export default PrivacyCheckItem;
