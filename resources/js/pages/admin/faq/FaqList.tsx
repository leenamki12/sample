import React, { useMemo, useState } from 'react';

import { Link, router } from '@inertiajs/react';
import { Divider, Table, Button, Modal, notification } from 'antd';
import type { TableColumnsType } from 'antd';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';
import { Paginate } from '@/types/common/paginate';

import FaqSearch from './search/FaqSearch';

import * as s from './FaqList.styled';

interface FaqData {
    id: number;
    title: string;
    is_published: boolean;
    is_main_published: boolean;
    created_at: string;
    faq: {
        id: number;
        category: string;
        content: string;
        created_at: string;
        updated_at: string;
    };
}

const Faq: React.FC<{ faqs: Paginate<FaqData> }> = ({ faqs }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const datas = useMemo(() => {
        return faqs.data || [];
    }, [faqs.data]);

    const pagination = useMemo(() => {
        const urlParams = new URLSearchParams(window.location.search);

        return {
            current: faqs.current_page,
            pageSize: faqs.per_page,
            total: faqs.total,
            showSizeChanger: true,
            onChange: (page: number) => {
                urlParams.set('page', page.toString());
                const queryString = urlParams.toString();
                router.visit(route('admin.faq.index') + '?' + queryString);
            },
            onShowSizeChange: (_current: number, perPage: number) => {
                urlParams.set('per_page', perPage.toString());
                const queryString = urlParams.toString();
                router.visit(route('admin.faq.index') + '?' + queryString);
            },
        };
    }, [faqs]);

    const getCategoryLabel = (text: string, category: string): string => {
        switch (category) {
            case 'COMMON':
                return '일반';
            case 'TICKET':
                return '티켓';
            case 'ENTERANCE':
                return '입장';
            default:
                return text;
        }
    };

    const columns: TableColumnsType<FaqData> = [
        {
            title: '항목',
            dataIndex: 'category',
            render: (text: string, record: FaqData) => (
                <span>{getCategoryLabel(text, record.faq.category)}</span>
            ),
            align: 'center',
            width: '120px',
        },
        {
            title: <div className="text-center">제목</div>,
            dataIndex: 'title',
            render: (text: string, record: any) => (
                <Link href={route('admin.faq.show', { id: record.id })}>{text}</Link>
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
        getCheckboxProps: (record: FaqData) => ({
            disabled: record.title === 'Disabled User',
            name: record.title,
        }),
    };

    const onDelete = () => {
        Modal.confirm({
            title: '알림',
            content: '선택한 FAQ를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            onOk: async () => {
                router.delete(route('admin.faq.delete'), {
                    data: {
                        board_ids: selectedRowKeys as string[],
                    },
                    preserveScroll: true,
                    preserveState: true,

                    onSuccess: () => {
                        notification.success({
                            message: '알림',
                            description: '선택한 FAQ가 성공적으로 삭제되었습니다.',
                        });
                    },
                });
            },
        });
    };

    const handleClickCreate = () => {
        router.visit(route('admin.faq.create'));
    };

    return (
        <>
            <PageHeader title="FAQ 목록" hasAdmin />
            <FaqSearch />
            <Divider />
            <s.TableWrapper>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={datas.map(faq => ({
                        ...faq,
                        key: faq.id.toString(),
                    }))}
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

export default Faq;
