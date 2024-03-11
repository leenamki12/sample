import { router } from '@inertiajs/react';
import { Form, Input, Switch, Radio, Button } from 'antd';

interface FaqFormData {
    title: string;
    category: string;
    content: string;
    isPublished: boolean;
    isMainPublished: boolean;
}

function FaqCreate() {
    const onFinish = async (values: FaqFormData) => {
        try {
            const formData = {
                type: 'FAQ',
                title: values.title,
                category: values.category,
                content: values.content,
                is_main_published: values.isMainPublished == true,
                is_published: values.isPublished == true,
            };
            router.post(route('admin.faq.store'), formData);
        } catch (error) {
            console.error('Error saving faq:', error);
        }
    };

    return (
        <div style={{ margin: 'auto', padding: '20px' }}>
            <Form
                name="faq_form"
                onFinish={onFinish}
                labelAlign="left"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="FAQ 항목" // 수정된 항목
                    name="category"
                    rules={[{ required: true, message: 'FAQ 항목을 선택해주세요.' }]}
                >
                    <Radio.Group>
                        <Radio.Button value="TICKET">티켓</Radio.Button>
                        <Radio.Button value="ENTERANCE">입장</Radio.Button>
                        <Radio.Button value="COMMON">일반</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="질문"
                    name="title"
                    rules={[{ required: true, message: '질문을 입력해주세요.' }]}
                >
                    <Input placeholder="질문을 입력해주세요." />
                </Form.Item>

                <Form.Item
                    label="답변"
                    name="content"
                    rules={[{ required: true, message: '답변을 입력해주세요.' }]}
                >
                    <Input.TextArea
                        rows={16}
                        placeholder="답변을 입력해주세요."
                        style={{ resize: 'none' }}
                    />
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

export default FaqCreate;
