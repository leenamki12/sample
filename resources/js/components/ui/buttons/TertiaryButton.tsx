import { ButtonProps } from './BaseButton';
import * as S from './styles/TertiaryButton.styled';

export default function TertiaryButton({ type = 'button', label, ...props }: ButtonProps) {
    return (
        <S.TertiaryButton {...props} type={type}>
            {label}
        </S.TertiaryButton>
    );
}
