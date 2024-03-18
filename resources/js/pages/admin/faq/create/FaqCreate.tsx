import { router, useForm } from '@inertiajs/react';
import { Form, Input, Radio, Button, notification } from 'antd';

import Forms from '@/components/forms/forms';
import { PageHeader } from '@/components/ui';

import { FaqFormData } from '../types/faqs';

function FaqCreate() {
    const { data, setData, clearErrors } = useForm<FaqFormData>({
        title: '',
        content: '',
        category: '',
        is_published: false,
        is_main_published: false,
    });

    const handleChangeData = (id: keyof FaqFormData, value: string | boolean) => {
        setData(id, value);
        clearErrors(id);
    };

    const onFinish = () => {
        router.visit(route('admin.faq.store'), {
            method: 'post',
            data: { type: 'FAQ', ...data },

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
            <PageHeader title="FAQ 등록" hasAdmin />
            <Forms
                name="faq_form"
                onFinish={onFinish}
                labelAlign="left"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="FAQ 항목"
                    name="category"
                    rules={[{ required: true, message: 'FAQ 항목을 선택해주세요.' }]}
                >
                    <Radio.Group
                        onChange={value => handleChangeData('category', value.target.value)}
                    >
                        <Radio.Button value="TICKET">티켓</Radio.Button>
                        <Radio.Button value="ENTERANCE">입장</Radio.Button>
                        <Radio.Button value="COMMON">일반</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Forms.Input<FaqFormData>
                    label="질문"
                    name="title"
                    rules={[{ required: true, message: '질문을 입력해주세요.' }]}
                    placeholder="질문을 입력해주세요."
                    size="large"
                    onValueChange={handleChangeData}
                />

                <Form.Item
                    label="답변"
                    name="content"
                    rules={[{ required: true, message: '답변을 입력해주세요.' }]}
                >
                    <Input.TextArea
                        rows={16}
                        placeholder="답변을 입력해주세요."
                        style={{ resize: 'none' }}
                        onChange={value => handleChangeData('content', value.target.value)}
                    />
                </Form.Item>

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

export default FaqCreate;
