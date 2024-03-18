import { LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import { useForm } from '@inertiajs/react';
import { Button, Typography } from 'antd';

import Forms from '@/components/forms/forms';

import * as s from './Home.styled';

type FieldType = {
    identification?: string;
    password?: string;
    remember?: boolean;
};

function Home() {
    const { data, setData, post, /*reset, errors,*/ clearErrors } = useForm<FieldType>({
        identification: 'admin',
        password: 'password',
        remember: true,
    });

    const handleChangeData = (id: keyof FieldType, value: string | boolean) => {
        setData(id, value);
        clearErrors(id);
    };

    const onFinish = () => {
        post(route('login'));
    };

    return (
        <s.Wrapper>
            <Typography.Title level={3} className="!mb-[30px] text-center">
                관리자 로그인
            </Typography.Title>
            <Forms
                name="basic"
                initialValues={data}
                onFinish={onFinish}
                autoComplete="off"
                className="w-[300px]"
            >
                <Forms.Input<FieldType>
                    name="identification"
                    rules={[{ required: true, message: '아이디를 정확히 입력하세요.' }]}
                    placeholder="아이디를 입력해주세요."
                    prefix={<UserIcon />}
                    size="large"
                    onValueChange={handleChangeData}
                    defaultValue={data.identification}
                />
                <Forms.Password<FieldType>
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
                    placeholder="비밀번호를 입력해주세요."
                    prefix={<LockClosedIcon />}
                    size="large"
                    onValueChange={handleChangeData}
                    defaultValue={data.password}
                />

                <Forms.Checkbox<FieldType>
                    name="remember"
                    onValueChange={handleChangeData}
                    defaultChecked={data.remember}
                />

                <Button type="primary" htmlType="submit" className="w-full">
                    로그인
                </Button>
            </Forms>
        </s.Wrapper>
    );
}

export default Home;
