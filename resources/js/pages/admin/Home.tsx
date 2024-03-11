import { LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import { useForm } from '@inertiajs/react';
import { Button, Checkbox, Form, Typography } from 'antd';

import Forms from '@/components/forms/input/Input';

import * as s from './Home.styled';

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
        <s.Wrapper>
            <Typography.Title level={3} className="!mb-[30px] text-center">
                관리자 로그인
            </Typography.Title>
            <Forms
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="w-[300px]"
            >
                <Forms.Input
                    name="identification"
                    rules={[{ required: true, message: '아이디를 정확히 입력하세요.' }]}
                    placeholder="아이디를 입력해주세요."
                    prefix={<UserIcon />}
                    size="large"
                    onChange={e => handleChangeInputData('identification', e.target.value)}
                />
                <Forms.Password
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
                    placeholder="비밀번호를 입력해주세요."
                    prefix={<LockClosedIcon />}
                    size="large"
                    onChange={e => handleChangeInputData('password', e.target.value)}
                />

                <Form.Item<FieldType> name="remember" valuePropName="checked">
                    <Checkbox>아이디 기억하기</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ backgroundColor: 'blue', borderColor: 'blue' }}
                    >
                        로그인
                    </Button>
                </Form.Item>
            </Forms>
        </s.Wrapper>
    );
}

export default Home;
