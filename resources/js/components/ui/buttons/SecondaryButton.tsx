import BaseButton from './BaseButton';
import * as S from './styles/SecondaryButton.styled';

type Props = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
};

export default function SecondaryButton({ type = 'button', label, ...props }: Props) {
    return (
        <S.SecondaryButton {...props} type={type}>
            {label}
        </S.SecondaryButton>
    );
}
