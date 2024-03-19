import React, { useMemo, useState } from 'react';

import { Link, router } from '@inertiajs/react';
import { Divider, Table, Button, Modal, notification } from 'antd';
import type { TableColumnsType } from 'antd';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';
import { Paginate } from '@/types/common/paginate';

import GallerySearch from './search/GallerySearch';

import * as s from './GalleryList.styled';

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
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const datas = useMemo(() => {
        return galleries.data;
    }, [galleries.data]);

    const pagination = useMemo(() => {
        const urlParams = new URLSearchParams(window.location.search);

        return {
            current: galleries.current_page,
            pageSize: galleries.per_page,
            total: galleries.total,
            showSizeChanger: true,
            onChange: (page: number) => {
                urlParams.set('page', page.toString());
                const queryString = urlParams.toString();
                router.visit(route('admin.gallery.index') + '?' + queryString);
            },
            onShowSizeChange: (_current: number, perPage: number) => {
                urlParams.set('per_page', perPage.toString());
                const queryString = urlParams.toString();
                router.visit(route('admin.gallery.index') + '?' + queryString);
            },
        };
    }, [galleries]);

    const columns: TableColumnsType<GalleryData> = [
        {
            title: '이미지',
            dataIndex: 'file_path',
            render: (text: string, record: GalleryData) => (
                <Link href={route('admin.gallery.show', { id: record.id })}>
                    <img max-width="100px" height="100px" src={record.file[0].file_path} />
                    {text}
                </Link>
            ),
            align: 'center',
            width: '300px',
        },
        {
            title: <div className="text-center">제목</div>,
            dataIndex: 'title',
            render: (text: string, record: GalleryData) => (
                <Link href={route('admin.gallery.show', { id: record.id })}>{text}</Link>
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
        getCheckboxProps: (record: GalleryData) => ({
            disabled: record.title === 'Disabled User',
            name: record.title,
        }),
    };

    const onDelete = () => {
        Modal.confirm({
            title: '알림',
            content: '선택한 이미지를 삭제하시겠습니까?',
            okText: '삭제',
            cancelText: '취소',
            onOk: async () => {
                router.delete(route('admin.gallery.delete'), {
                    data: {
                        board_ids: selectedRowKeys as string[],
                    },
                    preserveScroll: true,
                    preserveState: true,

                    onSuccess: () => {
                        notification.success({
                            message: '알림',
                            description: '선택한 이미지가 성공적으로 삭제되었습니다.',
                        });
                    },
                });
            },
        });
    };

    const handleClickCreate = () => {
        router.visit(route('admin.gallery.create'));
    };

    return (
        <div>
            <PageHeader title="GALLERY 목록" hasAdmin />
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
                            <s.TableFooterButtonWrap>
                                <Button
                                    type="primary"
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
            </div>
        </div>
    );
};

export default Gallery;
