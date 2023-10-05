import { FormEventHandler } from 'react';

import { router, useForm } from '@inertiajs/react';

import Button from '../../buttons/Button';
import TextInput from '../../inputs/text-input/TextInput';

import * as S from './PasswordModal.styled';

type Props = {
    onClose: () => void;
};

type FormKey = 'current_password' | 'password' | 'password_confirmation';

function PasswordModal({ onClose }: Props) {
    const { setData, errors, clearErrors, put } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const onUpdatePassword: FormEventHandler = e => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                alert('비밀번호가 변경되었습니다. 다시 로그인해주세요.');
                router.post(route('logout'), {}, { replace: true });
            },
            onError: errors => {
                console.log(errors);
                // if (errors.password) {
                //     reset('password', 'password_confirmation');
                // }

                // if (errors.current_password) {
                //     reset('current_password');
                // }
            },
        });
    };

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormKey, value);
        clearErrors(id as FormKey);
    };

    return (
        <S.Wrapper>
            <S.Form onSubmit={onUpdatePassword}>
                <S.Title>비밀번호변경</S.Title>
                <S.InputList>
                    <TextInput
                        type="password"
                        id="current_password"
                        onChange={handleChangeInputData}
                        placeholder="현재 비밀번호"
                        error={errors.current_password}
                    />
                </S.InputList>
                <S.Divider />
                <S.InputList>
                    <TextInput
                        type="password"
                        id="password"
                        placeholder="새로운 비밀번호"
                        onChange={handleChangeInputData}
                        error={errors.password}
                    />
                    <TextInput
                        type="password"
                        id="password_confirmation"
                        placeholder="새로운 비밀번호 확인"
                        onChange={handleChangeInputData}
                        error={errors.password_confirmation}
                    />
                </S.InputList>
                <S.ButtonBox>
                    <Button type="submit" label="변경" element="primary" />
                    <Button label="취소" element="cancel" onClick={onClose} />
                </S.ButtonBox>
            </S.Form>
        </S.Wrapper>
    );
}

export default PasswordModal;
