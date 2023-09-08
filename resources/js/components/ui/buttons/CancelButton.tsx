import BaseButton from './BaseButton';
import * as S from './styles/CancelButton.styled';

type Props = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
};

export default function CancelButton({ type = 'button', label, ...props }: Props) {
    return (
        <S.CancelButton {...props} type={type}>
            {label}
        </S.CancelButton>
    );
}
