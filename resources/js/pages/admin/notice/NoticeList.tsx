import React, { useState } from 'react';

import { router } from '@inertiajs/react';
import { Divider, Table, Button, Modal, notification } from 'antd';
import type { TableColumnsType } from 'antd';
import axios from 'axios';

import NoticeSearch from './NoticeSearch';

interface NoticeData {
    id: number;
    title: string;
    is_published: boolean;
    is_main_published: boolean;
    created_at: string;
    notice: {
        id: number;
        content: string;
        created_at: string;
        updated_at: string;
    };
}

const Notice: React.FC<{ notices: any }> = ({ notices }) => {
    const [dataSource, setDataSource] = useState<NoticeData[]>(notices.data);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: notices.total,
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

    const columns: TableColumnsType<NoticeData> = [
        {
            title: '제목',
            dataIndex: 'title',
            render: (text: string, record: NoticeData) => (
                <a onClick={() => handleNoticeDetail(record.id)}>{text}</a>
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
        getCheckboxProps: (record: NoticeData) => ({
            disabled: record.title === 'Disabled User',
            name: record.title,
        }),
    };

    const handleSearch = (formData: any) => {
        axios
            .post(route('admin.notice.search'), {
                params: formData,
            })
            .then(response => {
                setDataSource(
                    response.data.data.map((notice: NoticeData) => ({
                        ...notice,
                        key: notice.id.toString(),
                    }))
                );
                setPagination(prevState => ({
                    ...prevState,
                    total: response.data.total,
                }));
            })
            .catch(error => {
                console.error('공지 검색 실패: ', error);
            });
    };

    const handleNoticeDetail = (id: number) => {
        router.visit(route('admin.notice.show', { id }));
    };

    const handleDeleteSelected = () => {
        Modal.confirm({
            title: '알림',
            content: '선택한 공지를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            onOk: async () => {
                await axios
                    .post(route('admin.notice.delete'), { board_ids: selectedRowKeys })
                    .then(response => {
                        console.log(response);
                        notification.success({
                            message: '알림',
                            description: '선택한 공지가 성공적으로 삭제되었습니다.',
                        });
                        const remainingNotices = dataSource.filter(
                            notice => !selectedRowKeys.includes(notice.id.toString())
                        );
                        setDataSource(
                            remainingNotices.map((notice: NoticeData) => ({
                                ...notice,
                                key: notice.id.toString(),
                            }))
                        );
                    });
            },
        });
    };

    const onClickCreate = () => {
        router.visit(route('admin.notice.create'));
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
            <NoticeSearch onSearch={handleSearch} />
            <Divider />
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={dataSource.map(notice => ({ ...notice, key: notice.id.toString() }))}
                pagination={pagination}
                footer={footerContent}
            />
        </div>
    );
};

export default Notice;
