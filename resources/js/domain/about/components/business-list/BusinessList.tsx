import { Button } from '@/components/ui';

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
            <S.ButtonBox>
                <Button label="more info" element="more" />
            </S.ButtonBox>
        </S.Wrapper>
    );
}

export default BusinessList;
