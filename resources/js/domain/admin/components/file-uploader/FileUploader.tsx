import { ChangeEvent, useEffect, useState } from 'react';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui';
import { Image } from '@/types/common';

import { FileItem } from '../../pages/performance/edit/PerformanceEdit';

import * as S from './FileUploader.styled';

type Props = {
    label: string;
    isRequired?: boolean;
    onChange: (files: FileItem[]) => void;
    onDelete?: (ids: number[]) => void;
    items?: Image[];
};

function FileUploader({ label, isRequired, onChange, items, onDelete }: Props) {
    const [deleteItems, setDeleteItems] = useState<Image[]>([]);
    const [uploadFiles, setUploadFiles] = useState<FileItem[]>([]);
    const [uploadImages, setUploadImages] = useState<Image[]>(
        items?.map(item => {
            return { id: item.id, file_path: `/storage/${item.file_path}` };
        }) || []
    );

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const validationCheck = handleValidateFile(file);

        if (validationCheck) {
            alert(validationCheck);
            return;
        }

        setUploadFiles([
            ...uploadFiles,
            {
                file: file,
                old_id: undefined,
            },
        ]);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const previewImgUrl = reader.result;
            setUploadImages([
                ...uploadImages,
                { id: undefined, file_path: previewImgUrl as string, file_name: file.name },
            ]);
        };
    };

    const handleFileEdit = (
        event: ChangeEvent<HTMLInputElement>,
        index: number,
        oldPath: string
    ) => {
        const oldItem: Image | undefined = items?.find(
            item => `/storage/${item.file_path}` === oldPath
        );

        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const validationCheck = handleValidateFile(file);

        if (validationCheck) {
            alert(validationCheck);
            return;
        }

        const newFiles = [...uploadFiles];
        newFiles[index] = {
            file: file,
            old_id: oldItem?.id || undefined,
        };

        setUploadFiles(newFiles);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const previewImgUrl = reader.result;

            const newImages = [...uploadImages];
            newImages[index] = {
                id: undefined,
                file_name: file.name,
                file_path: previewImgUrl as string,
            };

            setUploadImages(newImages);
        };
    };

    function handleValidateFile(file: File) {
        const maxSizeInBytes = 2 * 1024 * 1024;
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        // 용량 체크
        if (file.size > maxSizeInBytes) {
            return '파일 크기가 너무 큽니다. 2MB 이하의 파일을 선택하세요.';
        }

        // 확장자 체크
        const extension = file.name.split('.').pop()?.toLowerCase();
        if (extension && !allowedExtensions.includes(extension)) {
            return '올바른 이미지 파일을 선택하세요. (jpg, jpeg, png, gif 확장자만 허용됩니다.)';
        }

        return false;
    }

    const handleClickImageDelete = (image: Image) => {
        const updatedImages = uploadImages.filter(item => item.file_path !== image.file_path);
        setUploadImages(updatedImages);

        const updatedFiles = uploadFiles.filter(item => item.file.name !== image.file_name);
        setUploadFiles(updatedFiles);
        if (image.id) {
            setDeleteItems([...deleteItems, image]);
        }
    };

    useEffect(() => {
        onChange(uploadFiles);
    }, [uploadFiles]);

    useEffect(() => {
        onDelete?.(deleteItems.map(item => item.id) as number[]);
    }, [deleteItems]);

    return (
        <S.Wrapper>
            <S.Title>
                <div className="flex items-center">
                    {label}
                    {isRequired && <span>*</span>}

                    <S.ImageCount active={uploadImages.length === 5}>
                        ({uploadImages.length} / 5)
                    </S.ImageCount>
                </div>
                {uploadImages.length !== 5 ? (
                    <S.UploadButton>
                        <ArrowUpTrayIcon />
                        이미지 업로드
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png, .gif"
                            onChange={handleFileChange}
                        />
                    </S.UploadButton>
                ) : (
                    <S.UploadDisabledButton>최대 수량 등록 완료</S.UploadDisabledButton>
                )}
            </S.Title>
            <S.Files isEmpty={uploadImages.length === 0}>
                {uploadImages.length > 0 ? (
                    uploadImages.map((image, index) => {
                        return (
                            image && (
                                <S.FileItem key={image.file_path}>
                                    {index === 0 ? (
                                        <div className="mb-2 text-sm text-emerald-500">
                                            대표이미지
                                        </div>
                                    ) : (
                                        <div className="mb-2 text-sm">&nbsp;</div>
                                    )}
                                    <S.Preview>
                                        <img src={image.file_path} />
                                    </S.Preview>
                                    <S.FileButtonBox>
                                        <S.LabelButton>
                                            <input
                                                type="file"
                                                accept=".jpg, .jpeg, .png, .gif"
                                                onChange={evevt => {
                                                    handleFileEdit(evevt, index, image.file_path);
                                                }}
                                            />
                                            수정
                                        </S.LabelButton>
                                        {uploadImages.length === 1 ? (
                                            ''
                                        ) : (
                                            <Button
                                                element="teriary"
                                                label="삭제"
                                                onClick={() => handleClickImageDelete(image)}
                                            />
                                        )}
                                    </S.FileButtonBox>
                                </S.FileItem>
                            )
                        );
                    })
                ) : (
                    <S.Empty>이미지를 등록해주세요.</S.Empty>
                )}
            </S.Files>
            <S.Info>
                <span>※</span> 이미지는 최대 5장까지 등록이 가능합니다.
                <br />
                <span>※</span> 첫번 째 업로드된 이미지는 대표 썸네일이 됩니다.
                <br />
                <span>※</span> 이미지 용량은 최대 2mb 미만 (jpg, jepg, png, gif)만 가능합니다.
            </S.Info>
        </S.Wrapper>
    );
}

export default FileUploader;
