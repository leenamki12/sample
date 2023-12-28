import React from 'react';

import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';
import SwitchButton from '@/components/ui/switch/SwitchButton';
import { PageProps } from '@/types';

import { Pagination, Table, TableWrapper, Td, TopSection } from '../../components';

import * as S from './PerformanceList.styled';

function PerformanceList() {
    const { performances } = usePage<PageProps>().props;

    const tableHeaderItems = [
        { name: '대표이미지', width: 120 },
        { name: 'Part', width: 100 },
        { name: '제목', width: '*' },
        { name: '공연시간', width: 100 },
        { name: '공연장소', width: 120 },
        { name: '노출여부', width: 80 },
        { name: '작성일', width: 100 },
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

    const onUpdateEnabled = (value: boolean) => {
        console.log(value);
    };

    const handleFilterCategories = (categories: string[]) => {
        if (categories.length == 0) {
            return '';
        }

        const excludedCount = categories.length > 1 ? `외 ${categories.length - 1}개` : '';

        return `${categories[0]} ${excludedCount}`;
    };

    const handleFormatText = (text: string) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={`${line}_${index}`}>
                {line}
                {index !== text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <>
            <PageHeader title="공연 관리" />

            <TopSection title="공연 목록" />

            <TableWrapper>
                <Table
                    headerItems={tableHeaderItems}
                    isChecked
                    onDelete={onDelete}
                    createHref="admin.performance.create"
                >
                    {performances.data.map(item => {
                        const partItems = item.parts.map(i => i.name);
                        return (
                            <React.Fragment key={item.id}>
                                <Td>
                                    <S.ImageBox>
                                        <img src={`/storage/${item.image_url}`} alt="" />
                                    </S.ImageBox>
                                </Td>
                                <Td>{handleFilterCategories(partItems)}</Td>
                                <Td>
                                    <S.TitleBox>{handleFormatText(item.title)}</S.TitleBox>
                                </Td>
                                <Td>{dayjs(item.date_and_time).format('YYYY-MM-DD')}</Td>
                                <Td>{item.address}</Td>
                                <Td>
                                    <SwitchButton
                                        defaultValue={!!item.hidden}
                                        onChange={onUpdateEnabled}
                                    />
                                </Td>
                                <Td>{dayjs(item.created_at).format('YYYY-MM-DD')}</Td>
                            </React.Fragment>
                        );
                    })}
                </Table>
            </TableWrapper>

            <Pagination datas={performances} />
        </>
    );
}

export default PerformanceList;
