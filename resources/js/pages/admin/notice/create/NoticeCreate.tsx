import ReactQuill from 'react-quill'; // Quill Editor import

import { Form, Input, Switch, Button } from 'antd';

import 'react-quill/dist/quill.snow.css'; // Quill Editor 스타일 import

interface NoticeFormData {
    title: string;
    content: string;
    isMainVisible: boolean;
    isMenuVisible: boolean;
}

function NoticeCreate() {
    const onFinish = (values: NoticeFormData) => {
        console.log('Received values:', values);
    };

    return (
        <div style={{ margin: 'auto', padding: '20px' }}>
            <Form
                name="notice_form"
                onFinish={onFinish}
                labelAlign="left"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="제목"
                    name="title"
                    rules={[{ required: true, message: '제목을 입력해주세요.' }]}
                >
                    <Input placeholder="제목을 입력해주세요." />
                </Form.Item>

                <Form.Item
                    label="공지내용"
                    name="content"
                    rules={[{ required: true, message: '공지내용을 입력해주세요.' }]}
                >
                    {/* Quill Editor로 변경 */}
                    <ReactQuill theme="snow" placeholder="공지내용을 입력해주세요." />
                </Form.Item>

                <Form.Item label="메인 노출여부" name="isMainVisible" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item label="메뉴 노출여부" name="isMenuVisible" valuePropName="checked">
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

export default NoticeCreate;
