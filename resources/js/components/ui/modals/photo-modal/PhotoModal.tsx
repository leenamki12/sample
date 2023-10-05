import { ChangeEvent, useRef, useState } from 'react';

import { useForm } from '@inertiajs/react';

import Button from '../../buttons/Button';

import * as S from './PhotoModal.styled';

type Props = {
    imageItem: string;
    onClickHistoryBack: () => void;
};

type FormProps = {
    businessLicense: File | null;
};

function PhotoModal({ imageItem, onClickHistoryBack }: Props) {
    const { setData, post } = useForm<FormProps>({
        businessLicense: null,
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickFile = () => {
        inputRef.current?.click();
    };

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

        setSelectedFile(file);
        setData('businessLicense', file);
    };

    const onSubmit = () => {
        post(route('profile.photoUpdate'), {
            preserveState: true,
            replace: false,
            preserveScroll: true,
            onSuccess: () => {
                alert('사업자등록증 변경을 완료했습니다.');
                onClickHistoryBack();
            },
            onError: () => {
                alert('업로드에 실패했습니다. 올바른 이미지인지 확인 후 재업로드 해주세요.');
            },
        });
    };

    return (
        <S.Wrapper>
            <S.Content>
                <img
                    src={(selectedFile && URL.createObjectURL(selectedFile)) || imageItem}
                    className="min-h-[500px]"
                    alt="사업자등록증"
                />
            </S.Content>
            <S.ButtonBox>
                <form onSubmit={onSubmit} method="post">
                    <Button label="변경" onClick={handleClickFile} element="primary" />
                    {selectedFile && <Button label="저장" onClick={onSubmit} element="secondary" />}
                    <Button label="닫기" onClick={onClickHistoryBack} element="teriary" />

                    <S.FileInput
                        type="file"
                        id="businessLicense"
                        onChange={handleFileChange}
                        ref={inputRef}
                        accept="image/*"
                    />
                </form>
            </S.ButtonBox>
        </S.Wrapper>
    );
}

export default PhotoModal;
