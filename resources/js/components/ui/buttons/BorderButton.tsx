import BaseButton from './BaseButton';
import * as S from './styles/BorderButton.styled';

type Props = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
} & S.Props;

export default function BorderButton({ type = 'button', label, color, ...props }: Props) {
    return (
        <S.BorderButton {...props} type={type} color={color}>
            {label}
        </S.BorderButton>
    );
}
