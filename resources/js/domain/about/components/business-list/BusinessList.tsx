import { router } from '@inertiajs/react';

import { Button } from '@/components/ui';

import * as S from './BusinessList.styled';

type Props = {
    title: string;
    subTitle: string;
    text: string;
    path?: string;
} & S.StyleProps;

function BusinessList({ title, text, subTitle, path, backgroundImage }: Props) {
    return (
        <S.Wrapper backgroundImage={backgroundImage}>
            <div>
                <S.Title>
                    {title} <span>{subTitle}</span>
                </S.Title>
                <S.Text>{text}</S.Text>
            </div>
            <S.ButtonBox>
                {path && (
                    <Button
                        label="more info"
                        element="more"
                        onClick={() => router.visit(route(path))}
                    />
                )}
            </S.ButtonBox>
        </S.Wrapper>
    );
}

export default BusinessList;
