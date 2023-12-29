import { ChangeEvent, useEffect, useState } from 'react';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui';

import * as S from './FileUploader.styled';

type Props = {
    label: string;
    isRequired?: boolean;
    onChange: (images: File[]) => void;
};

function FileUploader({ label, isRequired, onChange }: Props) {
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const [uploadImages, setUploadImages] = useState<(string | ArrayBuffer | null)[]>([]);

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

        setUploadFiles([...uploadFiles, file]);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const previewImgUrl = reader.result;
            setUploadImages([...uploadImages, previewImgUrl]);
        };
    };

    const handleFileEdit = (event: ChangeEvent<HTMLInputElement>, index: number) => {
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
        newFiles[index] = file;

        setUploadFiles(newFiles);

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const previewImgUrl = reader.result;

            const newImages = [...uploadImages];
            newImages[index] = previewImgUrl;

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

    useEffect(() => {
        onChange(uploadFiles);
    }, [uploadFiles]);

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
                                <S.FileItem key={image as string}>
                                    <S.Preview>
                                        <img src={image as string} />
                                    </S.Preview>
                                    <S.FileButtonBox>
                                        <S.LabelButton>
                                            <input
                                                type="file"
                                                accept=".jpg, .jpeg, .png, .gif"
                                                onChange={evevt => handleFileEdit(evevt, index)}
                                            />
                                            수정
                                        </S.LabelButton>
                                        <Button element="teriary" label="삭제" />
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
