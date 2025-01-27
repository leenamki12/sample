import { useState } from 'react';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { router } from '@inertiajs/react';
import { Form, Input, Radio, Switch, Button, DatePicker, Upload, message } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';

import { PageHeader } from '@/components/ui';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface GalleryFormData {
    title: string;
    year: number;
    category: string;
    isPublished: boolean;
    isMainPublished: boolean;
    file_id: number;
}

function GalleryCreate() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [fileId, setFileId] = useState<number>();

    const beforeUpload = (file: FileType) => {
        setLoading(true);
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('JPG/PNG 파일만 업로드 가능합니다.');
            setLoading(false);
        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            message.error('5MB 미만의 이미지를 업로드해주세요.');
            setLoading(false);
        }
        return isJpgOrPng && isLt5M;
    };

    const handleChange = async (file: any) => {
        setLoading(false);
        setFileId(file.file_id);
        setImageUrl(file.url);
    };

    const onFinish = async (values: GalleryFormData) => {
        try {
            const formData = {
                type: 'GALLERY',
                title: values.title,
                year: Number(dayjs(values.year).format('YYYY')),
                category: values.category,
                is_main_published: values.isMainPublished == true,
                is_published: values.isPublished == true,
                file_id: fileId,
            };
            router.post(route('admin.gallery.store'), formData);
        } catch (error) {
            console.error('이미지 등록 실패:', error);
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>업로드</div>
        </button>
    );

    return (
        <div className="rounded bg-white p-[20px] shadow">
            <PageHeader title="GALLERY 등록" hasAdmin />
            <Form
                name="gallery_form"
                onFinish={onFinish}
                labelAlign="left"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="연도"
                    name="year"
                    rules={[{ required: true, message: '연도를 선택해주세요.' }]}
                >
                    <DatePicker placeholder="연도 선택" picker="year" />
                </Form.Item>
                <Form.Item
                    label="카테고리"
                    name="category"
                    rules={[{ required: true, message: '카테고리를 선택해주세요.' }]}
                >
                    <Radio.Group>
                        <Radio.Button value="PHOTO">PHOTO</Radio.Button>
                        <Radio.Button value="HISTORY">HISTORY</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="제목"
                    name="title"
                    rules={[{ required: true, message: '제목을 입력해주세요.' }]}
                >
                    <Input placeholder="제목 입력" />
                </Form.Item>

                <Form.Item
                    label="이미지 업로드"
                    name="file_id"
                    rules={[{ required: true, message: '이미지를 첨부해주세요.' }]}
                >
                    <Upload
                        listType="picture-card"
                        showUploadList={false}
                        action="upload"
                        customRequest={async ({ file, action }) => {
                            const formData = {
                                image: file,
                            };
                            const response = await axios.post(action, formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            });
                            handleChange(response.data);
                        }}
                        beforeUpload={beforeUpload}
                    >
                        {imageUrl ? (
                            <img src={imageUrl} alt="avatar" style={{ width: '200%' }} />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </Form.Item>

                <Form.Item label="메인 노출여부" name="isMainPublished" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item label="메뉴 노출여부" name="isPublished" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                        }}
                    >
                        저장
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default GalleryCreate;
