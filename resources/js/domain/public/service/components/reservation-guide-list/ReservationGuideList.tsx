import * as S from './ReservationGuideList.styled';

type PriceType = {
    icon: string;
    title: string;
    text: string;
};

type Props = {
    items: PriceType[];
};

function ReservationGuideList({ items }: Props) {
    return (
        <S.Wrapper>
            {items.map((item, index) => (
                <S.Item key={item.title}>
                    <S.StepText>STEP {index + 1}</S.StepText>
                    <div className="mr-[60px] min-w-[100px] mobile:mr-[30px] mobile:min-w-[50px] tablet:mr-[45px] tablet:min-w-[75px]">
                        <img
                            src={item.icon}
                            alt=""
                            className="mobile:max-w-[50px] tablet:max-w-[75px]"
                        />
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

export default ReservationGuideList;
