import { ReactNode, useMemo } from 'react';

import { usePage } from '@inertiajs/react';

import { Button } from '@/components/ui';
import Section from '@/domain/admin/components/section/Section';
import Table from '@/domain/admin/components/table/Table';
import TableWrapper from '@/domain/admin/components/table-wrapper/TableWrapper';
import { PageProps } from '@/types';
import { Companies } from '@/types/user';

import * as S from './List.styled';

type ListItem = {
    id: number;
    name: string;
    address: string;
    employees: number;
    button?: ReactNode;
    boolean: 'waiting' | 'stopped' | 'completed';
};

function List() {
    const { companies } = usePage<PageProps>().props;

    const handleClickButton = (text: Companies) => {
        console.log(text.authCode);
    };

    const bodyItems: ListItem[] = useMemo(() => {
        const newItems = companies.data.map((item, index) => {
            return {
                id: index,
                name: item.detail.name,
                address: item.detail.address,
                employees: item.detail.employees,
                button: (
                    <Button
                        element="text"
                        onClick={() => handleClickButton(item)}
                        label="자세히보기"
                    />
                ),
                boolean: item.approvalStatus,
            };
        });
        return newItems || [];
    }, [companies.data]);

    const tableHeaderItems = [
        { name: 'ID', width: 80 },
        { name: '기업명', width: 200 },
        { name: '주소', width: '*' },
        { name: '임직원수', width: 100 },
        { name: '사업자등록증', width: 160 },
        { name: '승인여부', width: 160 },
    ];

    return (
        <S.Wrapper>
            <Section title="기업 목록">
                <TableWrapper>
                    <Table headerItems={tableHeaderItems} bodyItems={bodyItems} />
                </TableWrapper>
            </Section>
        </S.Wrapper>
    );
}

export default List;
