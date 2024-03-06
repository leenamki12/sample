import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { Divider, Table, Button, DatePicker, Select, Input } from 'antd';
import type { TableColumnsType } from 'antd';

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

function Notice({ notices }: { notices: any }) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isMainPublished, setIsMainPublished] = useState<string>('all');
    const [isPublished, setIsPublished] = useState<string>('all');
    const [title, setTitle] = useState<string>('');

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
            render: (text: string) => <a>{text}</a>,
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
        onChange: (selectedRowKeys: React.Key[], selectedRows: NoticeData[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: NoticeData) => ({
            disabled: record.title === 'Disabled User',
            name: record.title,
        }),
    };

    const handleDeleteSelected = () => {
        console.log('삭제 선택됨');
    };

    const onClickCreate = () => {
        router.visit(route('admin.notice.create'));
    };

    const handleSearch = () => {
        const formData = {
            start_date: startDate ? formatDate(startDate.toString()) : '',
            end_date: endDate ? formatDate(endDate.toString()) : '',
            is_main_published:
                isMainPublished === 'all' ? '' : (isMainPublished === 'visible').toString(),
            is_published: isPublished === 'all' ? '' : (isPublished === 'visible').toString(),
            title: title,
        };
        console.log(formData);
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
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '1rem' }}>등록일자</label>
                <DatePicker.RangePicker
                    onChange={dates => {
                        setStartDate(dates[0] ? dates[0].toDate() : null);
                        setEndDate(dates[1] ? dates[1].toDate() : null);
                    }}
                    format="YYYY-MM-DD"
                    placeholder={['시작', '종료']}
                    style={{ marginRight: '1rem' }}
                />
                <label style={{ marginRight: '1rem' }}>메인 노출여부</label>
                <Select
                    defaultValue="all"
                    onChange={value => setIsMainPublished(value)}
                    style={{ marginRight: '1rem', width: '100px' }}
                >
                    <Select.Option value="all">전체</Select.Option>
                    <Select.Option value="visible">노출</Select.Option>
                    <Select.Option value="invisible">미노출</Select.Option>
                </Select>
                <label style={{ marginRight: '1rem' }}>메뉴 노출여부</label>
                <Select
                    defaultValue="all"
                    onChange={value => setIsPublished(value)}
                    style={{ marginRight: '1rem', width: '100px' }}
                >
                    <Select.Option value="all">전체</Select.Option>
                    <Select.Option value="visible">노출</Select.Option>
                    <Select.Option value="invisible">미노출</Select.Option>
                </Select>
                <label style={{ marginRight: '1rem' }}>공지 제목</label>
                <Input
                    placeholder="공지제목"
                    onChange={e => setTitle(e.target.value)}
                    style={{ width: '300px', marginRight: '1rem' }}
                />
                <Button
                    type="primary"
                    style={{ marginLeft: '1rem', backgroundColor: 'blue', borderColor: 'blue' }}
                    onClick={handleSearch}
                >
                    검색
                </Button>
            </div>
            <Divider />
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={notices.data.map((notice: NoticeData) => ({
                    ...notice,
                    key: notice.id.toString(),
                }))}
                pagination={{ position: ['bottomCenter'] }}
                footer={footerContent}
            />
        </div>
    );
}

export default Notice;
