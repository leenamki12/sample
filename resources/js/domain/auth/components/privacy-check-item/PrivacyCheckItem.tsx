import { Checkbox } from '@/components/ui';

import * as S from './PrivacyCheckItem.styled';

type Props = {
    id: string;
    children: string;
    onClick?: () => void;
};

function PrivacyCheckItem({ id, children, onClick }: Props) {
    return (
        <S.Item>
            <label htmlFor={id}>
                <Checkbox id={id} />
                <span>{children}</span>
            </label>
            <button onClick={onClick}>내용보기</button>
        </S.Item>
    );
}

export default PrivacyCheckItem;
