import { useMemo } from 'react';

import * as S from './Table.styled';

type HeaderItems = {
    name: string;
    width: number | string;
};

type BodyItems = {
    [T in string]: any;
};

type Props = {
    headerItems: HeaderItems[];
    bodyItems: BodyItems[];
};

function Table({ headerItems, bodyItems }: Props) {
    console.log(bodyItems);
    const body = useMemo(() => {
        return bodyItems.length !== 0 ? bodyItems.map(item => Object.values(item)) : [];
    }, [bodyItems]);

    return (
        <S.Wrapper>
            <colgroup>
                {headerItems.map((item, idx) => (
                    <col key={`${item.name}-${idx}`} width={item.width} />
                ))}
            </colgroup>
            <S.Thead>
                <tr>
                    {headerItems.map((item, idx) => (
                        <S.Th key={`${item.name}-${idx}`}>{item.name}</S.Th>
                    ))}
                </tr>
            </S.Thead>
            <S.Tbody>
                {body.map((values, idx) => (
                    <tr key={`${values[0]}-${idx}`}>
                        {values.map((value, idx) => (
                            <S.Td key={`${values[0]}-${idx}`}>
                                <div>{value}</div>
                            </S.Td>
                        ))}
                    </tr>
                ))}
                {body.length === 0 && (
                    <tr>
                        <td colSpan={headerItems.length}>
                            <S.Empty>목록이 없습니다.</S.Empty>
                        </td>
                    </tr>
                )}
            </S.Tbody>
        </S.Wrapper>
    );
}

export default Table;
