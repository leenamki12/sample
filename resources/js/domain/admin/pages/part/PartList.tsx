import { FormEventHandler } from 'react';

import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
    ExclamationCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { router, useForm, usePage } from '@inertiajs/react';

import { Button, PageHeader } from '@/components/ui';
import { PageProps } from '@/types';

import * as S from './PartList.styled';

function PartList() {
    const { parts } = usePage<PageProps>().props;

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
            {/* <S.AddSectionWrap>
                <form onSubmit={onSubmit}>
                    <div className="flex">
                        <input
                            type="text"
                            id="name"
                            onChange={e => handleChangeInputData('name', e.target.value)}
                        />
                        <Button label="추가" element="primary" type="submit" />
                    </div>
                    <div>{errors.name}</div>
                </form>
            </S.AddSectionWrap> */}
            <div className="flex">
                <Button
                    label="Part 추가"
                    element="primary"
                    type="submit"
                    className="max-w-[100px]"
                />
            </div>
            <S.GridWrap>
                {parts.data.map(item => (
                    <>
                        <S.GridItem key={item.name}>
                            <S.GridItemRowNum>{item.row_number}</S.GridItemRowNum>
                            <S.GridContent>
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <div className="flex items-center text-xl font-bold text-gray-900">
                                        {item.name}
                                    </div>
                                    <p className="text-gray-500">{item.use_count}개 등록</p>
                                </div>
                                <S.DeleteButton type="button" onClick={() => onDelete(item.id)}>
                                    <XMarkIcon className="h-5 w-5" />
                                </S.DeleteButton>
                            </S.GridContent>
                        </S.GridItem>
                    </>
                ))}
            </S.GridWrap>

            <nav className="mt-12 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
                <div className="-mt-px flex w-0 flex-1">
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        <ArrowLongLeftIcon
                            className="mr-3 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        Previous
                    </a>
                </div>
                <div className="hidden md:-mt-px md:flex">
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        1
                    </a>
                    {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
                        aria-current="page"
                    >
                        2
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        3
                    </a>
                    <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                        ...
                    </span>
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        8
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        9
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        10
                    </a>
                </div>
                <div className="-mt-px flex w-0 flex-1 justify-end">
                    <a
                        href="#"
                        className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                        Next
                        <ArrowLongRightIcon
                            className="ml-3 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default PartList;
