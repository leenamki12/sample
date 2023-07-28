import * as S from './styles/BaseButton.styled';

type Props = React.HTMLAttributes<HTMLButtonElement> &
    S.ButtonProps & {
        type?: 'button' | 'submit' | 'reset';
    };

export default function BaseButton({ type = 'button', ...props }: Props) {
    return <S.Button type={type} {...props} />;
}
