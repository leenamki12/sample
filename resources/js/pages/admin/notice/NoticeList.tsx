import React, { useMemo, useState } from 'react';

import { Link, router } from '@inertiajs/react';
import { Divider, Table, Button, Modal, notification } from 'antd';
import type { TableColumnsType } from 'antd';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';
import { Paginate } from '@/types/common/paginate';

import NoticeSearch from './search/NoticeSearch';
import { NoticeData } from './types/notice';

import * as s from './NoticeList.styled';

const Notice: React.FC<{ notices: Paginate<NoticeData> }> = ({ notices }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const datas = useMemo(() => {
        return notices.data || [];
    }, [notices.data]);

    const pagination = useMemo(() => {
        const urlParams = new URLSearchParams(window.location.search);

        return {
            current: notices.current_page,
            pageSize: notices.per_page,
            total: notices.total,
            showSizeChanger: true,
            onChange: (page: number) => {
                urlParams.set('page', page.toString());
                const queryString = urlParams.toString();
                router.visit(route('admin.notice.index') + '?' + queryString);
            },
            onShowSizeChange: (_current: number, perPage: number) => {
                urlParams.set('per_page', perPage.toString());
                const queryString = urlParams.toString();
                router.visit(route('admin.notice.index') + '?' + queryString);
            },
        };
    }, [notices]);

    const columns: TableColumnsType<NoticeData> = [
        {
            title: <div className="text-center">제목</div>,
            dataIndex: 'title',
            render: (text: string, record: NoticeData) => (
                <Link href={route('admin.notice.show', { id: record.id })}>{text}</Link>
            ),
            align: 'left',
            width: '*',
        },
        {
            title: '메인 노출여부',
            dataIndex: 'is_main_published',
            render: (isActive: boolean) => (
                <s.TableColStatus isAcitve={isActive}>
                    {isActive ? '노출' : '미노출'}
                </s.TableColStatus>
            ),
            align: 'center',
            width: '150px',
        },
        {
            title: '메뉴 노출여부',
            dataIndex: 'is_published',
            render: (isActive: boolean) => (
                <s.TableColStatus isAcitve={isActive}>
                    {isActive ? '노출' : '미노출'}
                </s.TableColStatus>
            ),
            align: 'center',
            width: '150px',
        },
        {
            title: '작성일',
            dataIndex: 'created_at',
            align: 'center',
            render: (createdAt: string) => dayjs(createdAt).format('YYYY-MM-DD'),
            width: '200px',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys);
        },
        getCheckboxProps: (record: NoticeData) => ({
            disabled: record.title === 'Disabled User',
            name: record.title,
        }),
    };

    const onDelete = () => {
        Modal.confirm({
            title: '알림',
            content: '선택한 공지를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            onOk: async () => {
                router.delete(route('admin.notice.delete'), {
                    data: {
                        board_ids: selectedRowKeys as string[],
                    },
                    preserveScroll: true,
                    preserveState: true,

                    onSuccess: () => {
                        notification.success({
                            message: '알림',
                            description: '선택한 공지가 성공적으로 삭제되었습니다.',
                        });
                    },
                });
            },
        });
    };

    const handleClickCreate = () => {
        router.visit(route('admin.notice.create'));
    };

    return (
        <>
            <PageHeader title="공지사항 목록" hasAdmin />
            <NoticeSearch />
            <Divider />
            <s.TableWrapper>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    bordered
                    columns={columns}
                    dataSource={datas.map(notice => ({ ...notice, key: notice.id.toString() }))}
                    pagination={pagination}
                    footer={() => {
                        return (
                            <s.TableFooterButtonWrap>
                                <Button
                                    type="default"
                                    onClick={onDelete}
                                    disabled={selectedRowKeys.length === 0}
                                >
                                    선택 삭제
                                </Button>
                                <Button type="primary" onClick={handleClickCreate}>
                                    등록
                                </Button>
                            </s.TableFooterButtonWrap>
                        );
                    }}
                />
            </s.TableWrapper>
        </>
    );
};

export default Notice;
