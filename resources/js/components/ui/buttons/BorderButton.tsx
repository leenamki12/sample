import { ButtonProps } from './BaseButton';
import * as S from './styles/BorderButton.styled';

export default function BorderButton({ type = 'button', label, color, ...props }: ButtonProps) {
    return (
        <S.BorderButton {...props} type={type} color={color}>
            {label}
        </S.BorderButton>
    );
}
