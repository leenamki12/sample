import { FormEventHandler, useRef, useState } from 'react';
import { Address } from 'react-daum-postcode';

import { router, useForm, usePage } from '@inertiajs/react';

import {
    AddressModal,
    Button,
    InputRefProps,
    LabelTextInput,
    PageHeader,
    PasswordChangeModal,
    PhotoModal,
    TextInput,
} from '@/components/ui';
import { PageProps } from '@/types';

import LabelButton from './components/label-button/LabelButton';
import * as S from './styles/ProfileEdit.styled';
import { ProfileEditFormKey, ProfileEditFormProps } from './types/Profie';

export default function ProfileEdit() {
    const { auth, profile } = usePage<PageProps>().props;
    const { data, patch, setData, errors, clearErrors } = useForm<ProfileEditFormProps>({
        name: auth.user.name,
        companiesName: profile.detail.name,
        employees: profile.detail.employees,
        address: profile.detail.address,
        postalCode: profile.detail.postalCode,
        addressDetail: profile.detail.addressDetail,
        marketingConsent: auth.user.marketingConsent,
    });

    const isApprovalStatus = profile.approvalStatus === 'completed';

    const [addressModalShow, setAddressModalShow] = useState(false);
    const [passwordChangeModalShow, setPasswordChangeModalShow] = useState(false);
    const [photoModalShow, setPhotoModalShow] = useState(false);

    const addressInputRef = useRef<InputRefProps>(null);
    const postalCodeInputRef = useRef<InputRefProps>(null);

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as ProfileEditFormKey, value);
        clearErrors(id as ProfileEditFormKey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        patch(route('profile.update'), {
            replace: false,
            onSuccess: () => {
                alert('회원정보 수정이 완료되었습니다.');
            },
        });
    };

    const onSubmitCodeChange: FormEventHandler = e => {
        e.preventDefault();
        router.patch(
            route('companyCode.update'),
            {},
            {
                preserveState: true,
                replace: false,
                preserveScroll: true,
                onSuccess: () => {
                    alert('기업코드가 변경 되었습니다. 서비스 소개서 전송 버튼을 눌러주세요.');
                },
            }
        );
    };

    function handleAddressComplete(responseAddress: Address) {
        addressInputRef.current?.setValue(responseAddress.address);
        postalCodeInputRef.current?.setValue(responseAddress.zonecode);
        setData({
            ...data,
            ...{ postalCode: responseAddress.zonecode, address: responseAddress.address },
        });
        setAddressModalShow(false);

        if (errors.address) {
            clearErrors('address');
        }
    }

    return (
        <>
            <PageHeader title="회원정보수정" />
            <S.Wrapper>
                <S.InnerWrapper>
                    <S.Form onSubmit={onSubmit}>
                        <div>
                            <LabelTextInput
                                type="email"
                                id="email"
                                placeholder="이메일 ('@' 이후까지 입력해 주세요.)"
                                isFocused
                                label="이메일"
                                onChange={handleChangeInputData}
                                readOnly
                                defaultValue={auth.user.email}
                            />
                        </div>
                        <div>
                            <LabelButton
                                label="비밀번호"
                                buttonType="teriary"
                                buttonLabel="비밀번호 변경"
                                fontSize="14px"
                                onClick={() => setPasswordChangeModalShow(true)}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="text"
                                id="name"
                                placeholder="이름을 입력해주세요."
                                onChange={handleChangeInputData}
                                label="이름"
                                isRequired
                                defaultValue={data.name}
                                error={errors.name}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="text"
                                id="companiesName"
                                placeholder="기업명을 입력해주세요."
                                label="기업명"
                                onChange={handleChangeInputData}
                                isRequired
                                error={errors.companiesName}
                                defaultValue={data.companiesName}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="number"
                                id="employees"
                                placeholder="임직원수를 입력해주세요."
                                label="임직원수"
                                onChange={handleChangeInputData}
                                isRequired
                                error={errors.employees}
                                defaultValue={data.employees || 0}
                            />
                        </div>
                        <S.RowBox isError={!!errors.address}>
                            <S.InputButtonBox isLabel>
                                <LabelTextInput
                                    ref={addressInputRef}
                                    type="text"
                                    id="address"
                                    placeholder="도로명 주소"
                                    label="주소"
                                    isRequired
                                    readOnly
                                    defaultValue={data.address}
                                />
                                <Button
                                    element="teriary"
                                    label="주소검색"
                                    onClick={() => setAddressModalShow(true)}
                                />
                            </S.InputButtonBox>
                            <S.InputAddressBox>
                                <TextInput
                                    type="text"
                                    id="postalCode"
                                    placeholder="우편번호"
                                    ref={postalCodeInputRef}
                                    readOnly
                                    defaultValue={data.postalCode}
                                />
                                <TextInput
                                    type="text"
                                    id="addressDetail"
                                    placeholder="상세주소를 입력해 주세요."
                                    onChange={handleChangeInputData}
                                    defaultValue={data.addressDetail}
                                />
                            </S.InputAddressBox>

                            {errors.address && <S.Error>{errors.address}</S.Error>}
                        </S.RowBox>
                        <div>
                            <LabelButton
                                label="사업자등록증"
                                buttonType="teriary"
                                buttonLabel="확인하기"
                                fontSize="14px"
                                onClick={() => setPhotoModalShow(true)}
                            />
                        </div>

                        {isApprovalStatus ? (
                            <S.RowBox isError={!!errors.address}>
                                <S.InputButtonBox isLabel>
                                    <LabelTextInput
                                        type="number"
                                        id="authCode"
                                        label="기업코드"
                                        readOnly
                                        value={profile.authCode}
                                    />
                                    <Button
                                        element="teriary"
                                        label="재발행"
                                        onClick={onSubmitCodeChange}
                                    />
                                </S.InputButtonBox>

                                <Button
                                    element="border"
                                    fontSize="14px"
                                    label="서비스 소개서 및 기업코드 전송"
                                    onClick={() => console.log('서비스 소개서 재발행')}
                                />
                            </S.RowBox>
                        ) : (
                            <>
                                <div>
                                    <LabelTextInput
                                        type="text"
                                        id="authCode"
                                        label="기업코드"
                                        readOnly
                                        defaultValue={
                                            profile.approvalStatus === 'stopped'
                                                ? '기업코드가 정지 상태입니다. 전화문의 바랍니다.'
                                                : '기업코드 심사 대기중입니다.'
                                        }
                                    />
                                </div>
                            </>
                        )}

                        <div className="pt-[10px]">
                            <Button type="submit" label="회원정보 수정" element="primary" />
                        </div>
                    </S.Form>
                </S.InnerWrapper>
            </S.Wrapper>
            {addressModalShow && (
                <AddressModal
                    onClickHistoryBack={() => setAddressModalShow(false)}
                    onComplete={handleAddressComplete}
                />
            )}
            {passwordChangeModalShow && (
                <PasswordChangeModal onClose={() => setPasswordChangeModalShow(false)} />
            )}
            {photoModalShow && (
                <PhotoModal
                    imageItem={profile.detail.businessLicense}
                    onClickHistoryBack={() => setPhotoModalShow(false)}
                />
            )}
        </>
    );
}
