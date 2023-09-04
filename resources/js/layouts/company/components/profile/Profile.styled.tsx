import { Popover } from '@headlessui/react';
import tw, { styled } from 'twin.macro';

export const Button = styled(Popover.Button)`
    ${tw`flex items-center`}

    img {
        ${tw`h-7 w-auto`}
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
    ${tw`mt-[30px]`}
`;
