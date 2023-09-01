import * as S from './PriceList.styled';

type PriceType = {
    title: string;
    price: number;
};

type Props = {
    items: PriceType[];
};

function PriceList({ items }: Props) {
    return (
        <S.Wrapper>
            {items.map(item => (
                <S.Item key={item.title}>
                    <S.Title>{item.title}</S.Title>
                    <S.Text>
                        <strong>{item.price}</strong>만원
                    </S.Text>
                </S.Item>
            ))}
        </S.Wrapper>
    );
}

export default PriceList;
