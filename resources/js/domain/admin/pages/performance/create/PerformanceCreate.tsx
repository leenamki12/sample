import { FormEventHandler, useMemo } from 'react';

import { useForm, usePage } from '@inertiajs/react';

import { Button, LabelTextArea, LabelTextInput } from '@/components/ui';
import SwitchButton from '@/components/ui/switch/SwitchButton';
import { TopSection } from '@/domain/admin/components';
import Badges, { badge } from '@/domain/admin/components/badges/Badges';
import FileUploader from '@/domain/admin/components/file-uploader/FileUploader';
import { PageProps } from '@/types';
import { PerformanceFromkey } from '@/types/admin/performance';

import { FileItem } from '../edit/PerformanceEdit';

import * as S from './PerformanceCreate.styled';

type FormProps = {
    id: string;
    title: string;
    dateTime: string;
    location: string;
    visible: boolean;
    partTypeIds: number[];
    fileItems: FileItem[];
};

function PerformanceCreate() {
    const { categories } = usePage<PageProps>().props;
    const { data, post, setData, clearErrors, errors, processing } = useForm<FormProps>({
        id: '',
        title: '',
        dateTime: '',
        location: '',
        visible: true,
        partTypeIds: [],
        fileItems: [],
    });

    const handleChangeInputData = <K extends keyof FormProps>(id: K, value: FormProps[K]) => {
        const dataKey = id as PerformanceFromkey;

        setData(dataKey, value);
        clearErrors(dataKey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        post(route('admin.performance.store'));
    };

    const parts: badge[] = useMemo(() => {
        const newItems = categories.partTypes.map(part => {
            return {
                id: part.id,
                name: part.name,
                active: false,
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
                            onChange={values => handleChangeInputData('partTypeIds', values)}
                            label="Part"
                            items={parts}
                            isRequired
                            emptyLink="admin.part"
                        />
                        <LabelTextArea
                            label="제목"
                            type="datetime-local"
                            id="title"
                            onChange={(_id, value) => handleChangeInputData('title', value)}
                            placeholder="공연 제목을 입력해주세요."
                            error={errors?.['title']}
                            className="h-[120px]"
                            isRequired
                        />
                        <LabelTextInput
                            label="날짜 및 시간"
                            type="datetime-local"
                            id="dateTime"
                            onChange={(_id, value) => handleChangeInputData('dateTime', value)}
                            placeholder="공연 장소를 입력해주세요."
                            error={errors?.['dateTime']}
                            isRequired
                        />
                        <LabelTextInput
                            label="장소"
                            type="text"
                            id="location"
                            onChange={(_id, value) => handleChangeInputData('location', value)}
                            placeholder="공연 장소를 입력해주세요."
                            error={errors?.['location']}
                            isRequired
                        />

                        <S.Label>
                            <div className="flex items-center">
                                노출 여부 <span>*</span>
                            </div>
                        </S.Label>
                        <SwitchButton
                            defaultValue={data.visible}
                            onChange={value => handleChangeInputData('visible', value)}
                        />

                        <FileUploader
                            label="사진 업로드"
                            isRequired
                            onChange={images => handleChangeInputData('fileItems', images)}
                        />
                    </S.InputList>
                    <S.ButtonBox>
                        <Button
                            type="submit"
                            label="저장"
                            element="primary"
                            disabled={processing}
                        />
                    </S.ButtonBox>
                </S.Form>
            </S.Wrapper>
        </>
    );
}

export default PerformanceCreate;
