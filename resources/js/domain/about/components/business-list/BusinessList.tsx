import * as S from './BusinessList.styled';

type Props = {
    title: string;
    subTitle: string;
    text: string;
} & S.StyleProps;

function BusinessList({ title, text, subTitle, backgroundImage }: Props) {
    return (
        <S.Wrapper backgroundImage={backgroundImage}>
            <div>
                <S.Title>
                    {title} <span>{subTitle}</span>
                </S.Title>
                <S.Text>{text}</S.Text>
            </div>
            <div>버튼</div>
        </S.Wrapper>
    );
}

export default BusinessList;
