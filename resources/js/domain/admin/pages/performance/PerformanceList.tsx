import React from 'react';

import { router, usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import { PageProps } from '@/types';
import { PartType } from '@/types/admin/part-types';
import { WorkType } from '@/types/admin/work-types';

import { Pagination, Table, TableWrapper, Td, TopSection } from '../../components';

import * as S from './PerformanceList.styled';

function PerformanceList() {
    const { performances } = usePage<PageProps>().props;

    const tableHeaderItems = [
        { name: '대표이미지', width: 120 },
        { name: 'Part', width: 100 },
        { name: 'Work', width: 100 },
        { name: '제목', width: '*' },
        { name: '공연시간', width: 100 },
        { name: '공연장소', width: 200 },
        { name: '노출여부', width: 80 },
        { name: '작성일', width: 100 },
    ];

    const onDelete = (ids: number[]) => {
        if (ids.length === 0) {
            alert('삭제할 공연을 선택해주세요.');
            return;
        }

        const isConfirmed = confirm(
            '이미지를 삭제하시겠습니까?\n삭제 된 이미지는 복구가 불가능합니다.'
        );

        if (!isConfirmed) {
            return;
        }

        const selectedItems = performances.data
            .filter((_filterItem, index) => ids.includes(index))
            .map(item => item.id);

        router.delete(route('admin.performance.delete'), {
            data: {
                ids: selectedItems,
            },
            onSuccess: () => {
                alert('삭제되었습니다.');
                location.reload();
            },
        });
    };

    const handleFilterCategories = (categories: PartType[] | WorkType[]) => {
        if (categories.length === 0) {
            return '';
        }

        const excludedCount = categories.length > 1 ? `외 ${categories.length - 1}개` : '';

        return `${categories[0].name} ${excludedCount}`;
    };

    const handleFormatText = (text: string) => {
        const lines = text.split('\n');

        return lines.map((line, index) => (
            <React.Fragment key={`${line}_${index}`}>
                {line}
                {index !== lines.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    const handleClickEditLink = (id: number) => {
        const selectedItem = performances.data[id];

        if (selectedItem) {
            router.visit(route('admin.performance.edit', { id: selectedItem.id }));
        }
    };

    const handleClickCreate = () => {
        router.visit(route('admin.performance.create'));
    };

    return (
        <>
            <TopSection title="공연 목록" onClick={handleClickCreate} />

            <TableWrapper>
                {performances.data && (
                    <Table
                        headerItems={tableHeaderItems}
                        isChecked
                        onDelete={onDelete}
                        onClick={handleClickEditLink}
                        onClickCreate={handleClickCreate}
                    >
                        {performances.data.map(item => {
                            return (
                                <React.Fragment key={item.id}>
                                    <Td>
                                        <S.ImageBox>
                                            <img src={`/storage/${item.main_image_url}`} alt="" />
                                        </S.ImageBox>
                                    </Td>
                                    <Td>{handleFilterCategories(item.part_types)}</Td>
                                    <Td>{handleFilterCategories(item.work_types)}</Td>
                                    <Td>
                                        <S.TitleBox>{handleFormatText(item.title)}</S.TitleBox>
                                    </Td>
                                    <Td>{dayjs(item.date_time).format('YYYY-MM-DD')}</Td>
                                    <Td>{item.location}</Td>
                                    <Td>{item.visible ? '노출' : '미노출'}</Td>
                                    <Td>{dayjs(item.created_at).format('YYYY-MM-DD')}</Td>
                                </React.Fragment>
                            );
                        })}
                    </Table>
                )}
            </TableWrapper>

            <Pagination datas={performances} />
        </>
    );
}

export default PerformanceList;
