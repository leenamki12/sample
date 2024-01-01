import { useEffect, useState } from 'react';

import { router } from '@inertiajs/react';

import { Button } from '@/components/ui';

import * as S from './Badges.styled';

export type badge = {
    id: string | number;
    name: string;
    active: boolean;
};

type Props = {
    label: string;
    items: badge[];
    isRequired?: boolean;
    onChange: (selectedItem: number[]) => void;
    emptyLink?: string;
};

function Badges({ items, label, isRequired, onChange, emptyLink }: Props) {
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

    const handleClickLink = () => {
        if (emptyLink) router.visit(route(emptyLink));
    };

    useEffect(() => {
        if (items) {
            const newItems = items
                .filter(f => {
                    return f.active;
                })
                .map(m => m.id as number);
            setSelectedItems(newItems);
        }
    }, [items]);

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
                {items.length > 0 ? (
                    items.map(item => {
                        const isChecked = selectdItems.includes(item.id as number);
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
        </S.Wrapper>
    );
}

export default Badges;
