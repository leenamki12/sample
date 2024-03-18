import { useState } from 'react';

import { router, useForm } from '@inertiajs/react';
import { Form, Button, notification } from 'antd';

import Forms from '@/components/forms/forms';
import { PageHeader } from '@/components/ui';

import { NoticeFormData } from '../types/notice';

function NoticeCreate() {
    const [fileIds, setFileIds] = useState<number[]>([]);

    const { data, setData, clearErrors } = useForm<NoticeFormData>({
        title: '',
        content: '',
        is_published: false,
        is_main_published: false,
        file_ids: [],
    });

    const handleChangeData = (id: keyof NoticeFormData, value: string | boolean) => {
        setData(id, value);
        clearErrors(id);
    };

    const onSubmit = () => {
        router.visit(route('admin.notice.store'), {
            method: 'post',
            data: { type: 'NOTICE', ...data, file_ids: fileIds },

            onSuccess: () => {
                notification.success({
                    message: '알림',
                    description: '공지가 성공적으로 등록되었습니다.',
                });
            },
        });
    };

    return (
        <div className="rounded bg-white p-[20px] shadow">
            <PageHeader title="공지사항 등록" hasAdmin />
            <Forms
                name="notice_form"
                onFinish={onSubmit}
                labelAlign="left"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={data}
            >
                <Forms.Input<NoticeFormData>
                    label="제목"
                    name="title"
                    rules={[{ required: true, message: '제목을 입력해주세요.' }]}
                    placeholder="제목을 입력해주세요."
                    size="large"
                    onValueChange={handleChangeData}
                />

                <Forms.Editor<NoticeFormData>
                    label="공지내용"
                    name="content"
                    rules={[{ required: true, message: '공지내용을 입력해주세요.' }]}
                    onChangeValue={handleChangeData}
                    onChangeFile={setFileIds}
                />

                <Forms.Switch
                    label="메인 노출여부"
                    name="is_main_published"
                    valuePropName="checked"
                    onValueChange={handleChangeData}
                />

                <Forms.Switch
                    label="메뉴 노출여부"
                    name="is_published"
                    valuePropName="checked"
                    onValueChange={handleChangeData}
                />

                <Form.Item wrapperCol={{ span: 24 }} className="flex justify-center">
                    <Button type="primary" htmlType="submit">
                        저장
                    </Button>
                </Form.Item>
            </Forms>
        </div>
    );
}

export default NoticeCreate;
