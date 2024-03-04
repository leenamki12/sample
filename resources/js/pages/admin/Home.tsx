import { useForm } from '@inertiajs/react';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
    identification?: string;
    password?: string;
    remember?: boolean;
};

type FormProps = 'identification' | 'password' | 'remember';

function Home() {
    const { setData, post, /*reset, errors,*/ clearErrors } = useForm<FieldType>({
        identification: '',
        password: '',
        remember: false,
    });

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormProps, value);
        clearErrors(id as FormProps);
    };

    const onFinish = () => {
        post(route('login'));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="아이디"
                name="identification"
                rules={[{ required: true, message: '아이디를 정확히 입력하세요.' }]}
            >
                <Input
                    id="identification"
                    placeholder="아이디"
                    onChange={e => handleChangeInputData('identification', e.target.value)}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="비밀번호"
                name="password"
                rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
            >
                <Input.Password
                    id="password"
                    type="password"
                    placeholder="비밀번호"
                    onChange={e => handleChangeInputData('password', e.target.value)}
                />
            </Form.Item>

            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Checkbox>아이디 기억하기</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ backgroundColor: 'blue', borderColor: 'blue' }}
                >
                    로그인
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Home;
