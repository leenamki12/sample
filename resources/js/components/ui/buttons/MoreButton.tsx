import MoreIcon from '@assets/common/icon_more.svg';

import { ButtonProps } from './BaseButton';
import * as S from './styles/MoreButton.styled';

export default function MoreButton({ type = 'button', label, ...props }: ButtonProps) {
    return (
        <S.MoreButton {...props} type={type}>
            {label}
            <img src={MoreIcon} alt="" />
        </S.MoreButton>
    );
}
