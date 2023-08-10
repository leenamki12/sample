import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import * as S from './Reservation.styled';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

function Reservation({ open, setOpen }: Props) {
    return (
        <Transition show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10 m-auto max-w-[435px]" onClose={setOpen}>
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
                        <div className="pointer-events-none fixed inset-0 m-auto flex max-w-[435px] pt-10">
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
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    온라인 예약문의
                                                </Dialog.Title>
                                            </div>
                                        </div>
                                        <S.ContentsBox>form </S.ContentsBox>
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
