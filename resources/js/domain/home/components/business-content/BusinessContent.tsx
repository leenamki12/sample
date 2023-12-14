import * as S from './BusinessContent.styled';

type Props = {
    title: string;
    content: string;
};

function BusinessContent({ title, content }: Props) {
    return (
        <>
            <S.Title>{title}</S.Title>
            <S.BusinessContent>{content}</S.BusinessContent>
        </>
    );
}

export default BusinessContent;
