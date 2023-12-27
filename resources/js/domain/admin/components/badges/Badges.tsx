import { useEffect, useState } from 'react';

import * as S from './Badges.styled';

export type badge = {
    id: string | number;
    name: string;
};

type Props = {
    label: string;
    items: badge[];
    isRequired?: boolean;
    onChange: (selectedItem: number[]) => void;
};

function Badges({ items, label, isRequired, onChange }: Props) {
    const [selectdItems, setSelectedItems] = useState<number[]>([]);

    const handleClickBadge = (id: number | string) => {
        const isSelectedId = selectdItems.includes(id as number);

        if (isSelectedId) {
            const newItems = selectdItems.filter(item => item !== id);
            setSelectedItems(newItems);
        } else {
            setSelectedItems([...selectdItems, id as number]);
        }
    };

    useEffect(() => {
        onChange(selectdItems);
    }, [selectdItems]);

    return (
        <S.Wrapper>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <S.Badges>
                {items.map(item => {
                    const isChecked = selectdItems.includes(item.id as number);
                    return (
                        <S.Badge
                            active={isChecked}
                            key={item.name}
                            onClick={() => handleClickBadge(item.id)}
                        >
                            <input type="checkbox" checked={isChecked} />
                            {item.name}
                        </S.Badge>
                    );
                })}
            </S.Badges>
        </S.Wrapper>
    );
}

export default Badges;
