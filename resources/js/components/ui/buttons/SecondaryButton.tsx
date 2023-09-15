import { ButtonProps } from './BaseButton';
import * as S from './styles/SecondaryButton.styled';

export default function SecondaryButton({ type = 'button', label, ...props }: ButtonProps) {
    return (
        <S.SecondaryButton {...props} type={type}>
            {label}
        </S.SecondaryButton>
    );
}
