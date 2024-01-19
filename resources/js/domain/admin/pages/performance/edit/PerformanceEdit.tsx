import { FormEventHandler } from 'react';

import { useForm, usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import { Button, LabelTextArea, LabelTextInput } from '@/components/ui';
import SwitchButton from '@/components/ui/switch/SwitchButton';
import { TopSection } from '@/domain/admin/components';
import Badges from '@/domain/admin/components/badges/Badges';
import FileUploader from '@/domain/admin/components/file-uploader/FileUploader';
import { PageProps } from '@/types';
import { PerformanceFromkey } from '@/types/admin/performance';

import * as S from './PerformanceEdit.styled';

export type FileItem = {
    file: File;
    old_id?: number;
    old_path?: string;
};

type FormProps = {
    id: string;
    title: string;
    date_time: string;
    location: string;
    visible: boolean;
    part_type_ids: number[];
    work_type_ids: number[];
    file_items: FileItem[];
    delete_image_ids: number[];
    main_visible: boolean;
    end_date_time: string;
};

function PerformanceEdit() {
    const { performance, categories } = usePage<PageProps>().props;

    const { data, post, setData, clearErrors, errors, processing } = useForm<FormProps>({
        id: `${performance.id}`,
        title: `${performance.title}`,
        date_time: `${performance.date_time}`,
        location: performance.location,
        visible: performance.visible,
        part_type_ids: performance.part_types.map(item => item.id as number),
        work_type_ids: performance.work_types.map(item => item.id as number),
        file_items: [],
        delete_image_ids: [],
        end_date_time: performance.end_date_time,
        main_visible: performance.main_visible,
    });

    const handleChangeInputData = <K extends keyof FormProps>(id: K, value: FormProps[K]) => {
        const dataKey = id as PerformanceFromkey;

        setData(dataKey, value);
        clearErrors(dataKey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        post(route('admin.performance.update', { id: performance.id }), {
            onSuccess: () => {
                alert('수정 완료 되었습니다.');
            },
        });
    };

    return (
        <>
            <TopSection title="공연 수정" />

            <S.Wrapper>
                <S.Form onSubmit={onSubmit}>
                    <S.InputList>
                        <Badges
                            onChange={values => handleChangeInputData('part_type_ids', values)}
                            label="Part"
                            items={categories.part_types}
                            isRequired
                            emptyLink="admin.part"
                            defaultSelectedItems={data.part_type_ids}
                            error={errors.part_type_ids}
                        />
                        <Badges
                            onChange={values => handleChangeInputData('work_type_ids', values)}
                            label="Work"
                            items={categories.work_types}
                            isRequired
                            emptyLink="admin.work"
                            defaultSelectedItems={data.work_type_ids}
                            error={errors.work_type_ids}
                        />
                        <LabelTextArea
                            label="제목"
                            id="title"
                            onChange={(_id, value) => handleChangeInputData('title', value)}
                            placeholder="공연 제목을 입력해주세요."
                            error={errors?.['title']}
                            defaultValue={data.title}
                            className="h-[120px]"
                            isRequired
                        />

                        <LabelTextInput
                            label="시작 날짜 및 시간"
                            type="datetime-local"
                            id="date_time"
                            onChange={(_id, value) => handleChangeInputData('date_time', value)}
                            placeholder="시작 날짜 및 시간을 입력해주세요."
                            error={errors?.['date_time']}
                            defaultValue={data.date_time}
                            max={dayjs(data.end_date_time)
                                .subtract(1, 'day')
                                .format('YYYY-MM-DD HH:mm:ss')}
                            isRequired
                        />
                        <LabelTextInput
                            label="종료 날짜 및 시간"
                            type="datetime-local"
                            id="end_date_time"
                            onChange={(_id, value) => handleChangeInputData('end_date_time', value)}
                            placeholder="종료 날짜 및 시간을 입력해주세요."
                            error={errors?.['end_date_time']}
                            defaultValue={data.end_date_time}
                            min={data.date_time}
                            isRequired
                        />
                        <LabelTextInput
                            label="장소"
                            type="text"
                            id="location"
                            onChange={(_id, value) => handleChangeInputData('location', value)}
                            placeholder="공연 장소를 입력해주세요."
                            error={errors?.['location']}
                            defaultValue={data.location}
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

                        <S.Label>
                            <div className="flex items-center">
                                메인 노출 여부 <span>*</span>
                            </div>
                        </S.Label>
                        <SwitchButton
                            defaultValue={data.main_visible}
                            onChange={value => handleChangeInputData('main_visible', value)}
                        />

                        <FileUploader
                            label="사진 업로드"
                            items={performance.images}
                            isRequired
                            error={errors.file_items}
                            onDelete={ids => handleChangeInputData('delete_image_ids', ids)}
                            onChange={files => {
                                handleChangeInputData('file_items', files);
                            }}
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

export default PerformanceEdit;
