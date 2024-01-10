import { FormEventHandler } from 'react';

import { useForm, usePage } from '@inertiajs/react';

import { Button, LabelTextArea, LabelTextInput } from '@/components/ui';
import SwitchButton from '@/components/ui/switch/SwitchButton';
import { TopSection } from '@/domain/admin/components';
import Badges from '@/domain/admin/components/badges/Badges';
import FileUploader from '@/domain/admin/components/file-uploader/FileUploader';
import { PageProps } from '@/types';
import { PerformanceFromkey } from '@/types/admin/performance';

import { FileItem } from '../edit/PerformanceEdit';

import * as S from './PerformanceCreate.styled';

type FormProps = {
    id: string;
    title: string;
    date_time: string;
    location: string;
    visible: boolean;
    part_type_ids: number[];
    work_type_ids: number[];
    file_items: FileItem[];
};

function PerformanceCreate() {
    const { categories } = usePage<PageProps>().props;
    const { data, post, setData, clearErrors, errors, processing } = useForm<FormProps>({
        id: '',
        title: '',
        date_time: '',
        location: '',
        visible: true,
        part_type_ids: [],
        work_type_ids: [],
        file_items: [],
    });

    const handleChangeInputData = <K extends keyof FormProps>(id: K, value: FormProps[K]) => {
        const dataKey = id as PerformanceFromkey;

        setData(dataKey, value);
        clearErrors(dataKey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        post(route('admin.performance.store'), {
            onSuccess: () => {
                alert('등록 완료 되었습니다.');
            },
        });
    };

    console.log(errors);

    return (
        <>
            <TopSection title="공연 등록" />

            <S.Wrapper>
                <S.Form onSubmit={onSubmit}>
                    <S.InputList>
                        <div>
                            <Badges
                                onChange={values => handleChangeInputData('part_type_ids', values)}
                                label="Part"
                                items={categories.part_types}
                                isRequired
                                defaultSelectedItems={data.part_type_ids}
                                emptyLink="admin.part"
                                error={errors.part_type_ids}
                            />
                        </div>
                        <div>
                            <Badges
                                onChange={values => handleChangeInputData('work_type_ids', values)}
                                label="Work"
                                items={categories.work_types}
                                defaultSelectedItems={data.work_type_ids}
                                isRequired
                                emptyLink="admin.work"
                                error={errors.work_type_ids}
                            />
                        </div>
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
                            id="date_time"
                            onChange={(_id, value) => handleChangeInputData('date_time', value)}
                            placeholder="공연 장소를 입력해주세요."
                            error={errors?.['date_time']}
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
                            error={errors.file_items}
                            onChange={images => handleChangeInputData('file_items', images)}
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
