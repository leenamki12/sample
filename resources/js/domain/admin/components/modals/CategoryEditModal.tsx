import { FormEvent } from 'react';

import dayjs from 'dayjs';

import { Button, TextInput } from '@/components/ui';
import { Part } from '@/types/admin/part';

import * as S from './CategoryEditModal.styled';

type Props<T> = {
    onSubmit: (e: FormEvent<Element>) => void;
    onChange?: (id: string, value: string) => void;
    onClose: () => void;
    errors?: Partial<Record<string, string>>;
    modalTitle: string;
    data?: T;
};

function CategoryEditModal<T extends Part>({
    modalTitle,
    data,
    onSubmit,
    onChange,
    onClose,
    errors,
}: Props<T>) {
    console.log(errors);
    return (
        <S.Wrapper>
            <S.Form onSubmit={onSubmit}>
                <S.Title>{modalTitle}</S.Title>
                <S.InputList>
                    <TextInput
                        type="text"
                        id="name"
                        onChange={onChange}
                        placeholder="이름을 작성해주세요."
                        error={errors?.['name']}
                        defaultValue={data?.name}
                        isFocused
                    />
                    {data && (
                        <S.DateList>
                            <S.DateItem>
                                생성일 : {dayjs(data.created_at).format('YYYY-MM-DD HH:mm')}
                            </S.DateItem>
                            {data.created_at != data.updated_at && (
                                <S.DateItem>
                                    마지막 업데이트 :{' '}
                                    {dayjs(data.updated_at).format('YYYY-MM-DD HH:mm')}
                                </S.DateItem>
                            )}
                        </S.DateList>
                    )}
                </S.InputList>
                <S.ButtonBox>
                    <Button type="submit" label="저장" element="primary" />
                    <Button label="취소" onClick={onClose} element="cancel" />
                </S.ButtonBox>
            </S.Form>
        </S.Wrapper>
    );
}

export default CategoryEditModal;
