import React, { ChangeEvent, ReactElement, ReactNode, useRef, useState } from 'react';

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
    onClick?: (id: number) => void;
    onDelete?: (items: number[]) => void;
    onClickCreate?: () => void;
};

function Table({ isChecked, headerItems, children, onDelete, onClick, onClickCreate }: Props) {
    const headerLength = headerItems.length;
    const allCheckboxRef = useRef<HTMLInputElement>(null);
    const listCheckboxRefs = React.Children.map(children, () => useRef<HTMLInputElement>(null));
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const updateAllCheckboxState = () => {
        if (!listCheckboxRefs) {
            return;
        }

        const allChecked = listCheckboxRefs.every(checkboxRef => checkboxRef.current?.checked);
        if (allCheckboxRef.current) {
            allCheckboxRef.current.checked = allChecked;
        }

        const checkedItems = listCheckboxRefs
            .filter(checkboxRef => checkboxRef.current?.checked)
            .map((_checkboxRef, index) => index);

        setCheckedItems(checkedItems);
    };

    const handleRowCheckboxChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        event.stopPropagation();
        updateAllCheckboxState();
    };

    const handleAllCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();

        if (!listCheckboxRefs) {
            return;
        }

        listCheckboxRefs.forEach(item => {
            if (item.current) {
                item.current.checked = event.target.checked;
            }
        });

        if (event.target.checked) {
            const items: number[] = Array.from(
                { length: listCheckboxRefs.length },
                (_, index) => index
            );
            setCheckedItems(items);
        } else {
            setCheckedItems([]);
        }
    };

    const handleClickDelete = () => {
        onDelete?.(checkedItems);
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
                    {listCheckboxRefs && listCheckboxRefs?.length > 0 ? (
                        <>
                            {React.Children.map(children, (child, index) => {
                                return React.cloneElement(
                                    child as ReactElement,
                                    { isChecked: listCheckboxRefs?.[index].current?.checked },
                                    <S.Tr onClick={() => onClick?.(index)}>
                                        {isChecked && (
                                            <S.Td>
                                                <Checkbox
                                                    ref={listCheckboxRefs?.[index]}
                                                    onClick={handleRowCheckboxChange}
                                                />
                                            </S.Td>
                                        )}
                                        {child}
                                    </S.Tr>
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
                {onClickCreate && (
                    <Button element="primary" label="등록" type="button" onClick={onClickCreate} />
                )}
            </S.ButtonWrap>
        </>
    );
}

export default Table;
