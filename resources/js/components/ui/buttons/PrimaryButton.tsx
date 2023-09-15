import { ButtonProps } from './BaseButton';
import * as S from './styles/PrimaryButton.styled';

export default function PrimaryButton({ type = 'button', label, ...props }: ButtonProps) {
    return (
        <S.PrimaryButton {...props} type={type}>
            {label}
        </S.PrimaryButton>
    );
}
