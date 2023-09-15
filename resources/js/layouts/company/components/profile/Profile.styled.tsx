import { Popover } from '@headlessui/react';
import tw, { styled } from 'twin.macro';

export const PopoverWrap = styled(Popover)`
    ${tw`absolute right-[20px] top-1/2 z-10 -translate-y-1/2`}
`;

export const Panel = styled(Popover.Panel)`
    ${tw`absolute left-1/2 z-10 mt-[10px] flex w-screen max-w-min -translate-x-1/2 px-4`}
`;

export const Button = styled(Popover.Button)`
    ${tw`flex h-[45px] w-[45px] items-center justify-center`}

    img {
        ${tw`m-auto h-[30px]`}
    }
`;

export const PanelInner = styled.div`
    ${tw`w-32 shrink rounded bg-white p-2 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5`}
`;

export const LinkButton = styled.button`
    ${tw`block w-full text-center leading-[30px]`}

    &:hover {
        ${tw`text-primary`}
    }
`;

export const InputList = styled.div`
    ${tw`w-full space-y-[12px]`}
`;

export const CheckboxWrapper = styled.div`
    ${tw`mt-[20px] text-[0px]`}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[30px] space-y-[10px]`}
`;

export const ImageBox = styled.div`
    ${tw`mb-[20px] flex justify-center`}
`;

export const LogoInfoText = styled.div`
    ${tw`mb-[30px] text-center text-sm text-[#666]`}
`;

export const ModalWrap = styled.div`
    ${tw`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/60`}
`;

export const ModalForm = styled.form`
    ${tw`w-[435px] rounded bg-white p-[50px]`}
`;
