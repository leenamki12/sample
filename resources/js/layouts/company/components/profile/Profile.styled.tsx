import { Popover } from '@headlessui/react';
import tw, { styled } from 'twin.macro';

export const Button = styled(Popover.Button)`
    ${tw`flex h-[45px] w-[45px] items-center justify-center`}

    img {
        ${tw`m-auto h-[30px]`}
    }
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
