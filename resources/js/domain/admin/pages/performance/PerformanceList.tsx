import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';
import { PageProps } from '@/types';

import { AddButton, Table, TableWrapper, Td, TopSection } from '../../components';

function PerformanceList() {
    const { performances } = usePage<PageProps>().props;

    const tableHeaderItems = [
        { name: '대표이미지', width: 200 },
        { name: 'Part', width: 160 },
        { name: '제목', width: '*' },
        { name: '공연시간', width: 160 },
        { name: '공연장소', width: 160 },
        { name: '사용여부', width: 160 },
        { name: '생성일', width: 100 },
    ];

    const onDelete = (ids: number[]) => {
        if (ids.length === 0) {
            alert('삭제할 공연을 선택해주세요.');
            return;
        }

        const selectedItems = performances.data
            .filter((_filterItem, index) => ids.includes(index))
            .map(item => item.id);

        console.log(selectedItems);
    };

    const handleFilterCategories = (categories: string[]) => {
        if (categories.length == 0) {
            return '';
        }

        const excludedCount = categories.length > 1 ? `외 ${categories.length - 1}개` : '';

        return `${categories[0]} ${excludedCount}`;
    };

    return (
        <>
            <PageHeader title="공연 관리" />

            <TopSection>
                <AddButton onClick={() => {}} />
            </TopSection>

            <TableWrapper>
                <Table headerItems={tableHeaderItems} isChecked onDelete={onDelete}>
                    {performances.data.map(item => {
                        const partItems = item.parts.map(i => i.name);

                        return (
                            <>
                                <Td>{item.row_number}</Td>
                                <Td>{handleFilterCategories(partItems)}</Td>
                                <Td>{item.title}</Td>
                                <Td>{dayjs(item.date_and_time).format('YYYY-MM-DD')}</Td>
                                <Td>{item.address}</Td>
                                <Td>{item.hidden}</Td>
                                <Td>{dayjs(item.created_at).format('YYYY-MM-DD')}</Td>
                            </>
                        );
                    })}
                </Table>
            </TableWrapper>
        </>
    );
}

export default PerformanceList;
