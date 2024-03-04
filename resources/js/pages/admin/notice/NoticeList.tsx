import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { Divider, Table, Button, DatePicker, Select, Input } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    title: string;
    isMainVisible: boolean;
    isMenuVisible: boolean;
    createdAt: string;
}

function Notice() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [mainVisibility, setMainVisibility] = useState<string>('all');
    const [menuVisibility, setMenuVisibility] = useState<string>('all');
    const [noticeTitle, setNoticeTitle] = useState<string>('');

    const columns: TableColumnsType<DataType> = [
        {
            title: '제목',
            dataIndex: 'title',
            render: (text: string) => <a>{text}</a>,
            align: 'center',
        },
        {
            title: '메인 노출여부',
            dataIndex: 'isMainVisible',
            render: (isMainVisible: boolean) => (
                <span style={{ color: isMainVisible ? 'blue' : 'red' }}>
                    {isMainVisible ? '노출' : '미노출'}
                </span>
            ),
            align: 'center',
        },
        {
            title: '메뉴 노출여부',
            dataIndex: 'isMenuVisible',
            render: (isMenuVisible: boolean) => (
                <span style={{ color: isMenuVisible ? 'blue' : 'red' }}>
                    {isMenuVisible ? '노출' : '미노출'}
                </span>
            ),
            align: 'center',
        },
        {
            title: '작성일',
            dataIndex: 'createdAt',
            align: 'center',
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            title: '공지사항 제목 1',
            isMainVisible: true,
            isMenuVisible: false,
            createdAt: '2024-02-10',
        },
        {
            key: '2',
            title: '공지사항 제목 2',
            isMainVisible: false,
            isMenuVisible: true,
            createdAt: '2024-02-11',
        },
        {
            key: '3',
            title: '공지사항 제목 3',
            isMainVisible: true,
            isMenuVisible: true,
            createdAt: '2024-02-12',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
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
        console.log('검색');
        console.log('startDate:', startDate);
        console.log('endDate:', endDate);
        console.log('mainVisibility:', mainVisibility);
        console.log('menuVisibility:', menuVisibility);
        console.log('noticeTitle:', noticeTitle);
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
                    placeholder={['등록일자 시작', '등록일자 종료']}
                    style={{ marginRight: '1rem' }}
                />
                <label style={{ marginRight: '1rem' }}>메인 노출여부</label>
                <Select
                    defaultValue="all"
                    onChange={value => setMainVisibility(value)}
                    style={{ marginRight: '1rem', width: '100px' }}
                >
                    <Select.Option value="all">전체</Select.Option>
                    <Select.Option value="visible">노출</Select.Option>
                    <Select.Option value="invisible">미노출</Select.Option>
                </Select>
                <label style={{ marginRight: '1rem' }}>메뉴 노출여부</label>
                <Select
                    defaultValue="all"
                    onChange={value => setMenuVisibility(value)}
                    style={{ marginRight: '1rem', width: '100px' }}
                >
                    <Select.Option value="all">전체</Select.Option>
                    <Select.Option value="visible">노출</Select.Option>
                    <Select.Option value="invisible">미노출</Select.Option>
                </Select>
                <label style={{ marginRight: '1rem' }}>공지 제목</label>
                <Input
                    placeholder="공지제목"
                    onChange={e => setNoticeTitle(e.target.value)}
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
                dataSource={data}
                pagination={{ position: ['bottomCenter'] }}
                footer={footerContent}
            />
        </div>
    );
}

export default Notice;
