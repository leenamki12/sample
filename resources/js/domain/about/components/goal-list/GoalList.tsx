import * as S from './GoalList.styled';

type Props = {
    title: string;
    text: string;
};

function GoalList({ title, text }: Props) {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
        </S.Wrapper>
    );
}

export default GoalList;
