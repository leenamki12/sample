import { ButtonProps } from './BaseButton';
import * as S from './styles/TextButton.styled';

export default function TextButton({ type = 'button', label, color, ...props }: ButtonProps) {
    return (
        <S.TextButton {...props} type={type} color={color}>
            {label}
        </S.TextButton>
    );
}
