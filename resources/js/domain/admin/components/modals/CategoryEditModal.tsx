import { FormEvent } from 'react';

import { Button, TextInput } from '@/components/ui';

import * as S from './CategoryEditModal.styled';

type Props = {
    onSubmit: (e: FormEvent<Element>) => void;
    onChange?: (id: string, value: string) => void;
    errors?: Partial<Record<string, string>>;
    modalTitle: string;
    value?: string;
};

function CategoryEditModal({ modalTitle, value, onSubmit, onChange, errors }: Props) {
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
                        defaultValue={value}
                    />
                </S.InputList>
                <S.ButtonBox>
                    <Button type="submit" label="변경" element="primary" />
                    <Button label="취소" element="cancel" />
                </S.ButtonBox>
            </S.Form>
        </S.Wrapper>
    );
}

export default CategoryEditModal;
