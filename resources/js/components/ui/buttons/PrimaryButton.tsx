import BaseButton from './BaseButton';
import * as S from './styles/PrimaryButton.styled';

type Props = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
};

export default function PrimaryButton({ type = 'button', label, ...props }: Props) {
    return (
        <S.PrimaryButton {...props} type={type}>
            {label}
        </S.PrimaryButton>
    );
}
