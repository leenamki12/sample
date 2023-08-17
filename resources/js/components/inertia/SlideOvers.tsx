import { Fragment, PropsWithChildren, useEffect } from 'react';

import { Transition, Dialog } from '@headlessui/react';

export default function SlideOvers({
    children,
    show = false,
    maxWidth = '100%',
    closeable = true,
    onClose = () => {},
}: PropsWithChildren<{
    show: boolean;
    maxWidth?: string;
    closeable?: boolean;
    onClose: CallableFunction;
}>) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    useEffect(() => {
        if (show) {
            document.documentElement.className = '!pr-[0px]';
        }
    }, [show]);

    return (
        <Transition show={show} as={Fragment}>
            <Dialog
                as="div"
                className={`relative z-10 m-auto max-w-[${maxWidth}]`}
                onClose={close}
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
                    <div
                        className={`fixed inset-0 m-auto max-w-[${maxWidth}] bg-black bg-opacity-60 transition-opacity`}
                    />
                </Transition.Child>

                <div className={`fixed inset-0 m-auto max-w-[${maxWidth}] overflow-hidden`}>
                    <div className="absolute inset-0 left-0 overflow-hidden">
                        <div
                            className={`pointer-events-none fixed inset-0 m-auto flex max-w-[${maxWidth}] items-end pt-10`}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500"
                                enterFrom="translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500"
                                leaveFrom="translate-y-0"
                                leaveTo="translate-y-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen">
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
