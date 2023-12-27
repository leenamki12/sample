import { FormEventHandler, useMemo, useState } from 'react';

import { useForm, usePage } from '@inertiajs/react';

import { Button, LabelTextArea, LabelTextInput } from '@/components/ui';
import { TopSection } from '@/domain/admin/components';
import Badges, { badge } from '@/domain/admin/components/badges/Badges';
import FileUploader, { uploadImage } from '@/domain/admin/components/file-uploader/FileUploader';
import { PageProps } from '@/types';
import { PerformanceFromkey } from '@/types/admin/performance';

import * as S from './PerformanceCreate.styled';

type FormProps = {
    id: string;
    title: string;
    date_and_time: string;
    address: string;
    image_id: string;
    hidden: boolean;
    parts: number[];
};

function PerformanceCreate() {
    const [imageItems, setImageItems] = useState<uploadImage[]>();
    const { categories } = usePage<PageProps>().props;
    const { post, setData, clearErrors, errors } = useForm<FormProps>({
        id: '',
        title: '',
        date_and_time: '',
        address: '',
        image_id: '',
        hidden: false,
        parts: [],
    });

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as PerformanceFromkey, value);
        clearErrors(id as PerformanceFromkey);
    };

    const handleChangeCategoryData = (id: string, values: number[]) => {
        setData(id as PerformanceFromkey, values);
        clearErrors(id as PerformanceFromkey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();

        post(route('admin.part.create'), {
            replace: false,
            onSuccess: () => {
                alert('추가 되었습니다.');
            },
        });
    };

    const parts: badge[] = useMemo(() => {
        const newItems = categories.parts.map(part => {
            return {
                id: part.id,
                name: part.name,
            };
        });
        return newItems;
    }, [categories]);

    return (
        <>
            <TopSection title="공연 등록" />
            <S.Wrapper>
                <S.Form onSubmit={onSubmit}>
                    <S.InputList>
                        <Badges
                            onChange={values => handleChangeCategoryData('parts', values)}
                            label="Part"
                            items={parts}
                            isRequired
                        />
                        <LabelTextArea
                            label="제목"
                            type="datetime-local"
                            id="title"
                            onChange={handleChangeInputData}
                            placeholder="공연 제목을 입력해주세요."
                            error={errors?.['title']}
                            className="h-[120px]"
                            isRequired
                        />
                        <LabelTextInput
                            label="날짜 및 시간"
                            type="datetime-local"
                            id="date_and_time"
                            onChange={handleChangeInputData}
                            placeholder="공연 장소를 입력해주세요."
                            error={errors?.['date_and_time']}
                            isRequired
                        />
                        <LabelTextInput
                            label="장소"
                            type="text"
                            id="address"
                            onChange={handleChangeInputData}
                            placeholder="공연 장소를 입력해주세요."
                            error={errors?.['address']}
                            isRequired
                        />
                        <FileUploader label="사진 업로드" isRequired onChange={setImageItems} />
                    </S.InputList>
                    <S.ButtonBox>
                        <Button type="submit" label="저장" element="primary" />
                    </S.ButtonBox>
                </S.Form>
            </S.Wrapper>
        </>
    );
}

export default PerformanceCreate;
