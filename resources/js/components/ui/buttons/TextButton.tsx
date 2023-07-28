import BaseButton from './BaseButton';
import * as S from './styles/TextButton.styled';

type Props = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
} & S.Props;

export default function TextButton({ type = 'button', label, color, ...props }: Props) {
    return (
        <S.TextButton {...props} type={type} color={color}>
            {label}
        </S.TextButton>
    );
}
