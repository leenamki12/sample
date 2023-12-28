import { FormEventHandler, useMemo } from 'react';

import { useForm, usePage } from '@inertiajs/react';

import { Button, LabelTextArea, LabelTextInput } from '@/components/ui';
import SwitchButton from '@/components/ui/switch/SwitchButton';
import { TopSection } from '@/domain/admin/components';
import Badges, { badge } from '@/domain/admin/components/badges/Badges';
import FileUploader from '@/domain/admin/components/file-uploader/FileUploader';
import { PageProps } from '@/types';
import { PerformanceFromkey } from '@/types/admin/performance';

import * as S from './PerformanceCreate.styled';

type FormProps = {
    id: string;
    title: string;
    date_and_time: string;
    address: string;
    hidden: boolean;
    parts: number[];
    files: File[];
};

function PerformanceCreate() {
    const { categories } = usePage<PageProps>().props;
    const { data, post, setData, clearErrors, errors } = useForm<FormProps>({
        id: '',
        title: '',
        date_and_time: '',
        address: '',
        hidden: false,
        parts: [],
        files: [],
    });

    const handleChangeInputData = (id: string, value: any) => {
        setData(id as PerformanceFromkey, value);
        clearErrors(id as PerformanceFromkey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        post(route('admin.performance.store'));
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
                            onChange={values => handleChangeInputData('parts', values)}
                            label="Part"
                            items={parts}
                            isRequired
                            emptyLink="admin.part"
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
                        <FileUploader
                            label="사진 업로드"
                            isRequired
                            onChange={images => handleChangeInputData('files', images)}
                        />

                        <SwitchButton
                            defaultValue={data.hidden}
                            onChange={value => handleChangeInputData('hidden', value)}
                        />
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
