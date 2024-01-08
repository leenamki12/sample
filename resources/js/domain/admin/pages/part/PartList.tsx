import { FormEvent, FormEventHandler, useState } from 'react';

import { router, useForm, usePage } from '@inertiajs/react';

import { PageProps } from '@/types';
import { PartType, PartTypeFormKey } from '@/types/admin/part';

import { TopSection, CategoryEditModal, Pagination, Empty } from '../../components';

import * as S from './PartList.styled';

function PartList() {
    const { adminPartTypes: parts } = usePage<PageProps>().props;
    const [isCreateModalShow, setIsCreateModalshow] = useState(false);
    const [isUpdateModalShow, setIsUpdateModalshow] = useState(false);
    const [partUpdateData, setPartUpdateData] = useState<PartType>();

    const { post, patch, setData, clearErrors, errors, processing } = useForm({
        name: '',
    });

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as PartTypeFormKey, value);
        clearErrors(id as PartTypeFormKey);
    };

    const handleClickUpdateModalShow = (item: PartType) => {
        setIsUpdateModalshow(true);
        setPartUpdateData(item);
    };

    const onCreateSubmit: FormEventHandler = e => {
        e.preventDefault();

        post(route('admin.part.create'), {
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
            patch(route('admin.part.update', { id: partUpdateData.id }), {
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
            router.delete(route('admin.part.delete'), {
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
            <TopSection title="Part 관리" onClick={() => setIsCreateModalshow(true)} />

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
                    modalTitle="Part 추가"
                    onSubmit={onCreateSubmit}
                    onChange={handleChangeInputData}
                    onClose={() => setIsCreateModalshow(false)}
                    errors={errors}
                    isProcessing={processing}
                />
            )}

            {isUpdateModalShow && (
                <CategoryEditModal<PartType>
                    modalTitle="Part 수정"
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

export default PartList;
