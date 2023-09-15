import { FormEventHandler, useRef } from 'react';

import { useForm } from '@inertiajs/react';

import {
    Button,
    InputRefProps,
    LabelFileInput,
    LabelTextInput,
    PageHeader,
    TextInput,
} from '@/components/ui';

import LabelButton from './components/label-button/LabelButton';
import * as S from './styles/ProfileEdit.styled';
import { ProfileEditFormKey, ProfileEditFormProps } from './types/ProfieEdit';

export default function ProfileEdit() {
    const { data, setData, errors, clearErrors } = useForm<ProfileEditFormProps>({
        email: 'leenamki12@naver.com',
        password: '',
        password_confirmation: '',
        name: '이남기',
        phone: '01050206570',
        phoneAuth: '',
        companiesName: '가치브라더',
        employees: 50,
        address: '',
        postalCode: '',
        addressDetail: '',
        businessLicense: null,
        marketingConsent: false,
    });

    const addressInputRef = useRef<InputRefProps>(null);
    const postalCodeInputRef = useRef<InputRefProps>(null);

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as ProfileEditFormKey, value);
        clearErrors(id as ProfileEditFormKey);
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();
        console.log('submit');
    };

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
                                error={errors.email}
                                onChange={handleChangeInputData}
                                readOnly
                                defaultValue={data.email}
                                // onBlur={onEmailVaild}
                            />
                        </div>
                        <div>
                            <LabelButton
                                label="비밀번호"
                                buttonType="teriary"
                                buttonLabel="비밀번호 변경"
                                fontSize="14px"
                                onClick={() => console.log('a')}
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
                                />
                                <Button
                                    element="teriary"
                                    label="주소검색"
                                    //onClick={() => setAddressModalShow(true)}
                                />
                            </S.InputButtonBox>
                            <S.InputAddressBox>
                                <TextInput
                                    type="text"
                                    id="postalCode"
                                    placeholder="우편번호"
                                    ref={postalCodeInputRef}
                                    readOnly
                                />
                                <TextInput
                                    type="text"
                                    id="addressDetail"
                                    placeholder="상세주소를 입력해 주세요."
                                    onChange={handleChangeInputData}
                                />
                            </S.InputAddressBox>

                            {errors.address && <S.Error>{errors.address}</S.Error>}
                        </S.RowBox>
                        <div>
                            <LabelFileInput
                                id="businessLicense"
                                label="사업자등록증"
                                placeholder="사업자등록증을 첨부해 주세요."
                                onChange={file => {
                                    if (errors.businessLicense) {
                                        clearErrors('businessLicense');
                                    }
                                    setData('businessLicense', file);
                                }}
                                error={errors.businessLicense}
                                isRequired
                            />
                        </div>
                    </S.Form>
                </S.InnerWrapper>
            </S.Wrapper>
        </>
    );
}
