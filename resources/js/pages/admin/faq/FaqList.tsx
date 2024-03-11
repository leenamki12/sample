import React, { useState } from 'react';

import { router } from '@inertiajs/react';
import { Divider, Table, Button, Modal, notification } from 'antd';
import type { TableColumnsType } from 'antd';
import axios from 'axios';

import FaqSearch from './FaqSearch';

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

const Faq: React.FC<{ faqs: any }> = ({ faqs }) => {
    const [dataSource, setDataSource] = useState<FaqData[]>(faqs.data);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: faqs.total,
        showSizeChanger: true,
        onChange: (page: number) => {
            pagination.current = page;
        },
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
            date.getDate()
        ).padStart(2, '0')}`;
    };
    const getCategoryLabel = (category: string): string => {
        switch (category) {
            case 'COMMON':
                return '일반';
            case 'TICKET':
                return '티켓';
            case 'ENTERANCE':
                return '입장';
            default:
                return '';
        }
    };

    const columns: TableColumnsType<FaqData> = [
        {
            title: '제목',
            dataIndex: 'title',
            render: (text: string, record: FaqData) => (
                <a onClick={() => handleFaqDetail(record.id)}>{text}</a>
            ),
            align: 'center',
        },
        {
            title: 'FAQ 항목',
            dataIndex: 'category',
            render: (text: string, record: FaqData) => (
                <span>{getCategoryLabel(record.faq.category)}</span>
            ),
            align: 'center',
        },
        {
            title: '메인 노출여부',
            dataIndex: 'is_main_published',
            render: (isMainPublished: boolean) => (
                <span style={{ color: isMainPublished ? 'blue' : 'red' }}>
                    {isMainPublished ? '노출' : '미노출'}
                </span>
            ),
            align: 'center',
        },
        {
            title: '메뉴 노출여부',
            dataIndex: 'is_published',
            render: (isPublished: boolean) => (
                <span style={{ color: isPublished ? 'blue' : 'red' }}>
                    {isPublished ? '노출' : '미노출'}
                </span>
            ),
            align: 'center',
        },
        {
            title: '작성일',
            dataIndex: 'created_at',
            align: 'center',
            render: (createdAt: string) => formatDate(createdAt),
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

    const handleSearch = (formData: any) => {
        axios
            .post(route('admin.faq.search'), {
                params: formData,
            })
            .then(response => {
                setDataSource(
                    response.data.data.map((faq: FaqData) => ({
                        ...faq,
                        key: faq.id.toString(),
                    }))
                );
                setPagination(prevState => ({
                    ...prevState,
                    total: response.data.total,
                }));
            })
            .catch(error => {
                console.error('FAQ 검색 실패: ', error);
            });
    };

    const handleFaqDetail = (id: number) => {
        router.visit(route('admin.faq.show', { id }));
    };

    const handleDeleteSelected = () => {
        Modal.confirm({
            title: '알림',
            content: '선택한 FAQ를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            onOk: async () => {
                await axios
                    .post(route('admin.faq.delete'), { board_ids: selectedRowKeys })
                    .then(response => {
                        console.log(response);
                        notification.success({
                            message: '알림',
                            description: '선택한 FAQ가 성공적으로 삭제되었습니다.',
                        });
                        const remainingFaqs = dataSource.filter(
                            faq => !selectedRowKeys.includes(faq.id.toString())
                        );
                        setDataSource(
                            remainingFaqs.map((faq: FaqData) => ({
                                ...faq,
                                key: faq.id.toString(),
                            }))
                        );
                    });
            },
        });
    };

    const onClickCreate = () => {
        router.visit(route('admin.faq.create'));
    };

    const footerContent = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <Button
                type="primary"
                style={{ marginRight: '1rem', backgroundColor: 'blue', borderColor: 'blue' }}
                onClick={handleDeleteSelected}
            >
                선택 삭제
            </Button>
            <Button
                type="primary"
                style={{ backgroundColor: 'blue', borderColor: 'blue' }}
                onClick={onClickCreate}
            >
                등록
            </Button>
        </div>
    );

    return (
        <div>
            <FaqSearch onSearch={handleSearch} />
            <Divider />
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={dataSource.map(faq => ({ ...faq, key: faq.id.toString() }))}
                pagination={pagination}
                footer={footerContent}
            />
        </div>
    );
};

export default Faq;
