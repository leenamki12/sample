import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

import { LabelTextInput, PrimaryButton } from '@/components/ui';
import BaseButton from '@/components/ui/buttons/BaseButton';

import * as S from './Reservation.styled';

type ModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    hospitalId: number;
};

type Props = {
    hospital_id: number;
    date: string;
    company: string;
    name: string;
    phone: string;
};

type FormKey = 'hospital_id' | 'date' | 'company' | 'name' | 'phone';

function Reservation({ open, setOpen, hospitalId }: ModalProps) {
    const { data, setData, post } = useForm<Props>({
        hospital_id: hospitalId,
        date: '',
        company: '',
        name: '',
        phone: '',
    });

    const handleSubmit = () => {
        console.log('submit', data);
        post(route('reservations.store'));

        /* , {
            onSuccess: () => console.log('success', data),
            onError: error => console.log(error),
        } */
    };

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormKey, value);
        console.log(data);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Transition show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10 m-auto max-w-[435px]"
                onClose={setOpen}
                static={true}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 m-auto max-w-[435px] bg-black bg-opacity-60 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 m-auto max-w-[435px] overflow-hidden">
                    <div className="absolute inset-0 left-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-0 m-auto flex max-w-[435px] items-end pt-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                    <S.ModalContainer>
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-center text-[20px] font-bold leading-8 text-[#111]">
                                                온라인 예약문의
                                            </Dialog.Title>
                                        </div>
                                        <S.ContentsBox>
                                            <S.Form onSubmit={handleSubmit}>
                                                <div>
                                                    <LabelTextInput
                                                        label="예약 희망 일자"
                                                        type="date"
                                                        isRequired
                                                        id="date"
                                                        value={data.date}
                                                        onChange={handleChangeInputData}
                                                    />
                                                </div>
                                                <div>
                                                    <LabelTextInput
                                                        label="기업명"
                                                        type="text"
                                                        isRequired
                                                        id="company"
                                                        value={data.company}
                                                        onChange={handleChangeInputData}
                                                    />
                                                </div>
                                                <div>
                                                    <LabelTextInput
                                                        label="고객명"
                                                        type="text"
                                                        placeholder="고객명을 입력해주세요."
                                                        isRequired
                                                        id="name"
                                                        value={data.name}
                                                        onChange={handleChangeInputData}
                                                    />
                                                </div>
                                                <div>
                                                    <LabelTextInput
                                                        label="연락처"
                                                        type="tel"
                                                        placeholder="연락처를 입력해주세요."
                                                        isRequired
                                                        id="phone"
                                                        value={data.phone}
                                                        onChange={handleChangeInputData}
                                                    />
                                                </div>
                                                <div className="flex space-x-[10px]">
                                                    <BaseButton
                                                        className="!text-lg"
                                                        onClick={onClose}
                                                    >
                                                        취소
                                                    </BaseButton>
                                                    <PrimaryButton
                                                        label="문의하기"
                                                        className="!text-lg"
                                                        type="submit"
                                                    />
                                                </div>
                                            </S.Form>
                                        </S.ContentsBox>
                                    </S.ModalContainer>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Reservation;
