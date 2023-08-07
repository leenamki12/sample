import * as S from './styles/Header.styled';

type Props = {
    label: string;
} & S.WrapperProps;

function Header({ label, maxWidth }: Props) {
    return (
        <S.Wrapper maxWidth={maxWidth}>
            <h2>{label}</h2>
        </S.Wrapper>
    );
}

export default Header;
