import * as S from './GuideList.styled';

type PriceType = {
    icon: string;
    title: string;
    text: string;
};

type Props = {
    items: PriceType[];
};

function GuideList({ items }: Props) {
    return (
        <S.Wrapper>
            {items.map((item, index) => (
                <S.Item key={item.title}>
                    <S.StepText>STEP {index + 1}</S.StepText>
                    <div className="mr-[60px] min-w-[100px]">
                        <img src={item.icon} alt="" />
                    </div>
                    <div>
                        <S.Title>{item.title}</S.Title>
                        <S.Text>{item.text}</S.Text>
                    </div>
                </S.Item>
            ))}
        </S.Wrapper>
    );
}

export default GuideList;
