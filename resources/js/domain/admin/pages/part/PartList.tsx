import { FormEventHandler, useState } from 'react';

import { router, useForm, usePage } from '@inertiajs/react';

import { Button, PageHeader } from '@/components/ui';
import { PageProps } from '@/types';

import CategoryEditModal from '../../components/modals/CategoryEditModal';
import Pagination from '../../components/pagination/Pagination';

import * as S from './PartList.styled';

function PartList() {
    const { parts } = usePage<PageProps>().props;
    const [isModalShow, setIsModalshow] = useState(false);

    const { post, setData, clearErrors, errors } = useForm();

    const handleChangeInputData = (id: string, value: string) => {
        setData(id, value);
        clearErrors(id);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();

        post(route('admin.part.create'), {
            replace: false,
            onSuccess: () => {
                alert('추가 되었습니다.');
                setIsModalshow(false);
            },
        });
    };

    const onDelete = (id: string | number) => {
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
            <PageHeader title="Part 관리" />
            <div className="flex">
                <Button
                    label="Part 추가"
                    element="primary"
                    type="submit"
                    className="max-w-[100px]"
                    onClick={() => setIsModalshow(true)}
                />
            </div>
            <S.GridWrap>
                {parts.data.map(item => (
                    <S.GridItem key={item.name}>
                        <S.GridItemRowNum>{item.row_number}</S.GridItemRowNum>
                        <S.GridContent>
                            <S.GridText>
                                <S.GridTextName>{item.name}</S.GridTextName>
                                <S.GridTextCount>{item.use_count}개 등록</S.GridTextCount>
                            </S.GridText>
                            <S.DeleteButton type="button" onClick={() => onDelete(item.id)}>
                                <S.XmarkIcon />
                            </S.DeleteButton>
                        </S.GridContent>
                    </S.GridItem>
                ))}
            </S.GridWrap>

            <Pagination datas={parts} />

            {isModalShow && (
                <CategoryEditModal
                    modalTitle={'Part 추가'}
                    onSubmit={onSubmit}
                    onChange={handleChangeInputData}
                    errors={errors}
                />
            )}
        </>
    );
}

export default PartList;
