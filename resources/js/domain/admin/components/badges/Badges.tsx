import * as S from './Badges.styled';

export type badge = {
    id: string | number;
    name: string;
};

type Props = {
    label: string;
    items: badge[];
    isRequired?: boolean;
};

function Badges({ items, label, isRequired }: Props) {
    return (
        <S.Wrapper>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <S.Badges>
                {items.map(item => (
                    <S.Badge>
                        <input type="checkbox" />
                        {item.name}
                    </S.Badge>
                ))}
            </S.Badges>
        </S.Wrapper>
    );
}

export default Badges;
