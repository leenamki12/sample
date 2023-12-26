import React, { ChangeEvent, ReactElement, ReactNode, useRef, useState } from 'react';

import { router } from '@inertiajs/react';

import { Button, Checkbox } from '@/components/ui';

import * as S from './Table.styled';

type HeaderItems = {
    name: string;
    width: number | string;
};

type Props = {
    isChecked?: boolean;
    headerItems: HeaderItems[];
    children: ReactNode;
    onDelete?: (items: number[]) => void;
    createHref?: string;
};

function Table({ isChecked, headerItems, children, onDelete, createHref }: Props) {
    const headerLength = headerItems.length;
    const allCheckboxRef = useRef<HTMLInputElement>(null);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    const listCheckboxRefs = React.Children.map(children, () => useRef<HTMLInputElement>(null));

    const handleRowCheckboxChange = () => {
        if (listCheckboxRefs) {
            const checkboxStatusArray = listCheckboxRefs.map(
                item => item.current?.checked || false
            );

            if (allCheckboxRef && allCheckboxRef.current) {
                if (checkboxStatusArray.includes(false)) {
                    allCheckboxRef.current.checked = false;
                } else {
                    allCheckboxRef.current.checked = true;
                }
            }

            const items: number[] = [];

            listCheckboxRefs.forEach((checkboxRef, index) => {
                if (checkboxRef.current?.checked) {
                    const itemId = index;
                    items.push(itemId);
                }
            });

            setCheckedItems(items);
        }
    };

    const handleAllCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (listCheckboxRefs) {
            listCheckboxRefs.forEach(item => {
                if (item.current) {
                    item.current.checked = e.target.checked;
                }
            });

            if (e.target.checked) {
                const items: number[] = [];
                React.Children.map(children, (_child, index) => items.push(index));

                setCheckedItems(items);
                return;
            }
            setCheckedItems([]);
        }
    };

    const handleClickDelete = () => {
        onDelete?.(checkedItems);
    };

    const handleClickCreate = () => {
        if (createHref) router.visit(route(createHref));
    };

    return (
        <>
            <S.Wrapper>
                <colgroup>
                    {isChecked && <col width="50px" />}
                    {headerItems.map((item, idx) => (
                        <col key={`${item.name}-${idx}`} width={item.width} />
                    ))}
                </colgroup>
                <S.Thead>
                    <tr>
                        {isChecked && (
                            <S.Th className="pl-[10px]">
                                <Checkbox ref={allCheckboxRef} onChange={handleAllCheckboxChange} />
                            </S.Th>
                        )}
                        {headerItems.map((item, idx) => (
                            <S.Th key={`${item.name}-${idx}`}>{item.name}</S.Th>
                        ))}
                    </tr>
                </S.Thead>
                <S.Tbody>
                    {children ? (
                        <>
                            {React.Children.map(children, (child, index) => {
                                return React.cloneElement(
                                    child as ReactElement,
                                    { isChecked: listCheckboxRefs?.[index].current?.checked },
                                    <tr>
                                        {isChecked && (
                                            <S.Td>
                                                <Checkbox
                                                    ref={listCheckboxRefs?.[index]}
                                                    onChange={handleRowCheckboxChange}
                                                />
                                            </S.Td>
                                        )}
                                        {child}
                                    </tr>
                                );
                            })}
                        </>
                    ) : (
                        <tr>
                            <td colSpan={isChecked ? headerLength + 1 : headerLength}>
                                <S.Empty>목록이 없습니다.</S.Empty>
                            </td>
                        </tr>
                    )}
                </S.Tbody>
            </S.Wrapper>
            <S.ButtonWrap>
                <Button
                    element="teriary"
                    label="선택 삭제"
                    type="button"
                    onClick={handleClickDelete}
                />
                {createHref && (
                    <Button
                        element="primary"
                        label="등록"
                        type="button"
                        onClick={handleClickCreate}
                    />
                )}
            </S.ButtonWrap>
        </>
    );
}

export default Table;
