import React, { useMemo, useState } from 'react';

import { router } from '@inertiajs/react';
import { Divider, Table, Button, Modal, notification } from 'antd';
import type { TableColumnsType } from 'antd';
import axios from 'axios';

import { Paginate } from '@/types/common/paginate';

import GallerySearch from './search/GallerySearch';

interface GalleryData {
    id: number;
    title: string;
    is_published: boolean;
    is_main_published: boolean;
    created_at: string;
    gallery: {
        id: number;
        year: number;
        created_at: string;
        updated_at: string;
    };
    file: {
        id: number;
        file_path: string;
    }[];
}

const Gallery: React.FC<{ galleries: Paginate<GalleryData> }> = ({ galleries }) => {
    const [dataSource, setDataSource] = useState<GalleryData[]>(galleries.data);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [pagination] = useState({
        current: 1,
        pageSize: 10,
        total: galleries.total,
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

    const columns: TableColumnsType<GalleryData> = [
        {
            title: '이미지',
            dataIndex: 'file_path',
            render: (text: string, record: GalleryData) => (
                <a onClick={() => handleGalleryDetail(record.id)}>
                    <img max-width="100px" height="100px" src={record.file[0].file_path} />
                    {text}
                </a>
            ),
            align: 'center',
            width: '100px',
        },
        {
            title: '제목',
            dataIndex: 'title',
            render: (text: string, record: GalleryData) => (
                <a onClick={() => handleGalleryDetail(record.id)}>{text}</a>
            ),
            align: 'left',
            width: '200px',
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
            width: '150px',
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
            width: '150px',
        },
        {
            title: '작성일',
            dataIndex: 'created_at',
            align: 'center',
            render: (createdAt: string) => formatDate(createdAt),
            width: '200px',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys);
        },
        getCheckboxProps: (record: GalleryData) => ({
            disabled: record.title === 'Disabled User',
            name: record.title,
        }),
    };

    const handleGalleryDetail = (id: number) => {
        router.visit(route('admin.gallery.show', { id }));
    };

    const handleDeleteSelected = () => {
        Modal.confirm({
            title: '알림',
            content: '선택한 이미지를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            onOk: async () => {
                await axios
                    .post(route('admin.gallery.delete'), { board_ids: selectedRowKeys })
                    .then(response => {
                        console.log(response);
                        notification.success({
                            message: '알림',
                            description: '선택한 이미지가 성공적으로 삭제되었습니다.',
                        });
                        const remainingGallerys = dataSource.filter(
                            gallery => !selectedRowKeys.includes(gallery.id.toString())
                        );
                        setDataSource(
                            remainingGallerys.map((gallery: GalleryData) => ({
                                ...gallery,
                                key: gallery.id.toString(),
                            }))
                        );
                    });
            },
        });
    };

    const onClickCreate = () => {
        router.visit(route('admin.gallery.create'));
    };

    const datas = useMemo(() => {
        return galleries.data;
    }, [galleries.data]);

    return (
        <div>
            <GallerySearch />
            <Divider />
            <div className="space-y-4 rounded bg-white p-[20px] shadow">
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={datas.map(gallery => ({ ...gallery, key: gallery.id.toString() }))}
                    pagination={pagination}
                    footer={() => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: '1rem 0',
                                }}
                            >
                                <Button
                                    type="primary"
                                    style={{
                                        marginRight: '1rem',
                                        backgroundColor: 'blue',
                                        borderColor: 'blue',
                                    }}
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
                    }}
                />
            </div>
        </div>
    );
};

export default Gallery;
