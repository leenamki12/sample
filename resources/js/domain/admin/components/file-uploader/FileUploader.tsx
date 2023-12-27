import { ChangeEvent, useEffect, useState } from 'react';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { router } from '@inertiajs/react';

import { Empty } from '..';

import * as S from './FileUploader.styled';

export type uploadImage = {
    id: number;
    file_path: string;
};

type Props = {
    label: string;
    isRequired?: boolean;
    onChange: (images: uploadImage[]) => void;
};

function FileUploader({ label, isRequired, onChange }: Props) {
    const [uploadImages, setUploadImages] = useState<uploadImage[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const maxSizeInBytes = 2 * 1024 * 1024;
        const allowedExtensions = ['jpg', 'jpeg', 'png'];

        if (!file) {
            return;
        }

        //용량체크
        if (file.size > maxSizeInBytes) {
            alert('파일 크기가 너무 큽니다. 2MB 이하의 파일을 선택하세요.');
            return;
        }

        //확장자체크
        const extension = file.name.split('.').pop()?.toLowerCase();
        if (extension && !allowedExtensions.includes(extension)) {
            alert('올바른 이미지 파일을 선택하세요. (jpg, jpeg, png 확장자만 허용됩니다.)');
            return;
        }

        router.visit(route('admin.image.store'), {
            method: 'post',
            data: {
                image: file,
            },
            preserveState: true,
            replace: false,
            preserveScroll: true,
            onSuccess: e => {
                setUploadImages([
                    ...uploadImages,
                    {
                        id: (e.props.uploadImages as uploadImage).id,
                        file_path: (e.props.uploadImages as uploadImage).file_path,
                    },
                ]);
            },
        });
    };

    useEffect(() => {
        onChange(uploadImages);
    }, [uploadImages]);

    return (
        <S.Wrapper>
            <S.Title>
                <div className="flex items-center">
                    {label}
                    {isRequired && <span>*</span>}

                    <S.ImageCount active={uploadImages.length > 5}>
                        ({uploadImages.length} / 5)
                    </S.ImageCount>
                </div>
                {uploadImages.length !== 5 ? (
                    <S.UploadButton>
                        <ArrowUpTrayIcon />
                        이미지 업로드
                        <input type="file" onChange={handleFileChange} />
                    </S.UploadButton>
                ) : (
                    <S.UploadDisabledButton>최대 수량 등록 완료</S.UploadDisabledButton>
                )}
            </S.Title>
            <S.Files>
                {uploadImages.length > 0 ? (
                    uploadImages.map(image => (
                        <S.FileItem>
                            <S.Preview>
                                <img src={`/storage/${image.file_path}`} />
                            </S.Preview>
                        </S.FileItem>
                    ))
                ) : (
                    <Empty text="이미지를 업로드해주세요." />
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
