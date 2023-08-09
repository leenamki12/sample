import BaseButton from './BaseButton';
import * as S from './styles/TertiaryButton.styled';

type Props = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
};

export default function TertiaryButton({ type = 'button', label, ...props }: Props) {
    return (
        <S.TertiaryButton {...props} type={type}>
            {label}
        </S.TertiaryButton>
    );
}
