import * as S from './Empty.styled';

type Props = {
    text: string;
};

function Empty({ text }: Props) {
    return <S.Wrapper>{text}</S.Wrapper>;
}

export default Empty;
