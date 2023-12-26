import { FormEvent } from 'react';

import dayjs from 'dayjs';

import { Button, LabelTextArea, LabelTextInput } from '@/components/ui';
import { Performance } from '@/types/admin/performance';

import * as S from './PerformanceEditModal.styled';

type Props<T> = {
    onSubmit: (e: FormEvent<Element>) => void;
    onChange?: (id: string, value: string) => void;
    onClose: () => void;
    errors?: Partial<Record<string, string>>;
    modalTitle: string;
    data?: T;
};

function PerformanceEditModal<T extends Performance>({
    modalTitle,
    data,
    onSubmit,
    onChange,
    onClose,
    errors,
}: Props<T>) {
    return (
        <S.Wrapper>
            <S.Form onSubmit={onSubmit}>
                <S.Title>{modalTitle}</S.Title>
                <S.InputList>
                    <LabelTextArea
                        label="공연 제목"
                        type="datetime-local"
                        id="title"
                        onChange={onChange}
                        placeholder="공연 제목을 입력해주세요."
                        error={errors?.['title']}
                        defaultValue={data?.title}
                        className="h-[120px]"
                        isRequired
                    />
                    <S.Divider />
                    <LabelTextInput
                        label="공연 시간"
                        type="datetime-local"
                        id="date_and_time"
                        onChange={onChange}
                        placeholder="공연 장소를 입력해주세요."
                        error={errors?.['date_and_time']}
                        defaultValue={data?.title}
                        isRequired
                    />
                    <S.Divider />
                    <LabelTextInput
                        label="공연 장소"
                        type="text"
                        id="address"
                        onChange={onChange}
                        placeholder="공연 장소를 입력해주세요."
                        error={errors?.['address']}
                        defaultValue={data?.title}
                        isRequired
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

export default PerformanceEditModal;
