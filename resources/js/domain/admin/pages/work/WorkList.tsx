import { FormEvent, FormEventHandler, useState } from 'react';

import { router, useForm, usePage } from '@inertiajs/react';

import { PageProps } from '@/types';
import { WorkType, WorkTypeFormKey } from '@/types/admin/work-types';

import { TopSection, CategoryEditModal, Pagination, Empty } from '../../components';

import * as S from './WorkList.styled';

function WorkList() {
    const { adminPartTypes: parts } = usePage<PageProps>().props;
    const [isCreateModalShow, setIsCreateModalshow] = useState(false);
    const [isUpdateModalShow, setIsUpdateModalshow] = useState(false);
    const [partUpdateData, setPartUpdateData] = useState<WorkType>();

    const { post, patch, setData, clearErrors, errors, processing } = useForm({
        name: '',
    });

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as WorkTypeFormKey, value);
        clearErrors(id as WorkTypeFormKey);
    };

    const handleClickUpdateModalShow = (item: WorkType) => {
        setIsUpdateModalshow(true);
        setPartUpdateData(item);
    };

    const onCreateSubmit: FormEventHandler = e => {
        e.preventDefault();

        post(route('admin.work.create'), {
            replace: false,
            onSuccess: () => {
                alert('추가 되었습니다.');
                setIsCreateModalshow(false);
            },
        });
    };

    const onUpdateSubmit: FormEventHandler = e => {
        e.preventDefault();
        if (partUpdateData) {
            patch(route('admin.work.update', { id: partUpdateData.id }), {
                replace: false,
                onSuccess: () => {
                    alert('수정 되었습니다.');
                    setIsUpdateModalshow(false);
                },
            });
        }
    };

    const onDelete = (e: FormEvent<Element>, id: string | number) => {
        e.stopPropagation();
        const result = confirm(`삭제시 복구가 불가능합니다.\n삭제 하시겠습니까?`);

        if (result) {
            router.delete(route('admin.work.delete'), {
                data: {
                    id,
                },
                replace: false,
                onSuccess: () => {
                    alert('삭제가 완료되었습니다.');
                },
            });
        }
    };

    return (
        <>
            <TopSection title="Work 관리" onClick={() => setIsCreateModalshow(true)} />

            {parts.data.length > 0 ? (
                <>
                    <S.GridWrap>
                        {parts.data.map(item => (
                            <S.GridItem
                                key={item.name}
                                onClick={() => handleClickUpdateModalShow(item)}
                            >
                                <S.GridItemRowNum>{item.order_sequence}</S.GridItemRowNum>
                                <S.GridContent>
                                    <S.GridText>
                                        <S.GridTextName>{item.name}</S.GridTextName>
                                        <S.GridTextCount>
                                            {item.performance_count}개 등록
                                        </S.GridTextCount>
                                    </S.GridText>
                                    <S.DeleteButton
                                        type="button"
                                        onClick={e => onDelete(e, item.id)}
                                    >
                                        <S.XmarkIcon />
                                    </S.DeleteButton>
                                </S.GridContent>
                            </S.GridItem>
                        ))}
                    </S.GridWrap>

                    <Pagination datas={parts} />
                </>
            ) : (
                <Empty text="목록이 없습니다." />
            )}

            {isCreateModalShow && (
                <CategoryEditModal
                    modalTitle="Work 추가"
                    onSubmit={onCreateSubmit}
                    onChange={handleChangeInputData}
                    onClose={() => setIsCreateModalshow(false)}
                    errors={errors}
                    isProcessing={processing}
                />
            )}

            {isUpdateModalShow && (
                <CategoryEditModal<WorkType>
                    modalTitle="Work 수정"
                    onSubmit={onUpdateSubmit}
                    onChange={handleChangeInputData}
                    onClose={() => setIsUpdateModalshow(false)}
                    errors={errors}
                    data={partUpdateData}
                    isProcessing={processing}
                />
            )}
        </>
    );
}

export default WorkList;
