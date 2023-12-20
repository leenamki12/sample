import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';
import { PageProps } from '@/types';

import { AddButton, Table, TableWrapper, Td, TopSection } from '../../components';

function PerformanceList() {
    const { performances } = usePage<PageProps>().props;

    const tableHeaderItems = [
        { name: '대표이미지', width: 200 },
        { name: '제목', width: '*' },
        { name: '공연시간', width: 160 },
        { name: '공연장소', width: 160 },
        { name: '사용여부', width: 160 },
        { name: '생성일', width: 100 },
    ];

    return (
        <>
            <PageHeader title="공연 관리" />

            <TopSection>
                <AddButton onClick={() => {}} />
            </TopSection>

            <TableWrapper>
                <Table headerItems={tableHeaderItems} isChecked>
                    {performances.data.map(item => (
                        <>
                            <Td>대표이미지</Td>
                            <Td>{item.title}</Td>
                            <Td>{dayjs(item.date_and_time).format('YYYY-MM-DD')}</Td>
                            <Td>{item.address}</Td>
                            <Td>{item.hidden}</Td>
                            <Td>{dayjs(item.created_at).format('YYYY-MM-DD')}</Td>
                        </>
                    ))}
                </Table>
            </TableWrapper>
        </>
    );
}

export default PerformanceList;
