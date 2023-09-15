import { ButtonProps } from './BaseButton';
import * as S from './styles/CancelButton.styled';

export default function CancelButton({ type = 'button', label, ...props }: ButtonProps) {
    return (
        <S.CancelButton {...props} type={type}>
            {label}
        </S.CancelButton>
    );
}
