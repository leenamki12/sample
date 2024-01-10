import { useState } from 'react';

import { router } from '@inertiajs/react';

import { Button } from '@/components/ui';

import * as S from './Badges.styled';

export type badge = {
    id: string | number;
    name: string;
};

type Props = {
    label: string;
    items: badge[];
    defaultSelectedItems: number[];
    isRequired?: boolean;
    onChange: (selectedItem: number[]) => void;
    emptyLink?: string;
    error?: string;
};

function Badges({
    items,
    defaultSelectedItems,
    label,
    isRequired,
    onChange,
    emptyLink,
    error,
}: Props) {
    const [selectedItems, setSelectedItems] = useState<number[]>(defaultSelectedItems);

    const handleClickBadge = (id: number | string) => {
        const isSelectedId = selectedItems.includes(id as number);

        if (isSelectedId) {
            const newItems = selectedItems.filter(item => item !== id);
            setSelectedItems(newItems);
            onChange(newItems);
        } else {
            setSelectedItems([...selectedItems, id as number]);
            onChange([...selectedItems, id as number]);
        }
    };

    const handleClickLink = () => {
        if (emptyLink) router.visit(route(emptyLink));
    };

    return (
        <S.Wrapper>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <S.Badges>
                {items.length > 0 ? (
                    items.map(item => {
                        const isChecked = selectedItems.includes(item.id as number);
                        return (
                            <S.Badge
                                active={isChecked}
                                key={item.name}
                                onClick={() => handleClickBadge(item.id)}
                            >
                                <input type="checkbox" defaultChecked={isChecked} />
                                {item.name}
                            </S.Badge>
                        );
                    })
                ) : (
                    <S.Empty>
                        먼저 {label}를 등록해주세요.
                        {emptyLink && (
                            <Button
                                label={`${label} 등록하러가기`}
                                element="teriary"
                                onClick={handleClickLink}
                            />
                        )}
                    </S.Empty>
                )}
            </S.Badges>
            {error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    );
}

export default Badges;
