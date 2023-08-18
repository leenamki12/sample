import { Checkbox } from '@/components/ui';

import * as S from './PrivacyCheckItem.styled';

type Props = {
    id: string;
    children: string;
    checked?: boolean;
    error?: string;
    onClick?: (e: React.MouseEvent) => void;
    onChange?: () => void;
};

function PrivacyCheckItem({ id, children, checked, error, onClick, onChange }: Props) {
    return (
        <div>
            <S.Item>
                <label htmlFor={id}>
                    <Checkbox id={id} checked={checked} onChange={onChange} />
                    <span>{children}</span>
                </label>
                <button onClick={onClick}>내용보기</button>
            </S.Item>
            {error && <S.Error>{error}</S.Error>}
        </div>
    );
}

export default PrivacyCheckItem;
