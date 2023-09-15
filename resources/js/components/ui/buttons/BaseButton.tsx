import * as S from './styles/BaseButton.styled';

type Props = React.HTMLAttributes<HTMLButtonElement> &
    S.ButtonStyleProps & {
        type?: 'button' | 'submit' | 'reset';
    };

export type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
    label: string;
} & Props;

export default function BaseButton({ type = 'button', ...props }: Props) {
    return <S.Button type={type} {...props} />;
}
