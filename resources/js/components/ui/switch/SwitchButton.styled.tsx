import { Switch } from '@headlessui/react';
import tw, { styled } from 'twin.macro';

type WrapperProps = {
    active: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    button {
        ${({ active }) => (active ? tw`bg-blue-600` : tw`bg-gray-200`)}
    }
`;

export const SwitchWrap = styled(Switch)`
    ${tw`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
`;

type Props = {
    active: boolean;
};

export const SwichRounded = styled.span<Props>`
    ${tw`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}

    ${({ active }) => (active ? tw`translate-x-5` : tw`translate-x-0`)}
`;

export const SwichInnerActive = styled.span<Props>`
    ${tw`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}

    ${({ active }) =>
        active ? tw`opacity-0 duration-100 ease-out` : tw`opacity-100 duration-200 ease-in`}
`;

export const SwichInnerInactive = styled.span<Props>`
    ${tw`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}

    ${({ active }) =>
        active ? tw`opacity-100 duration-200 ease-in` : tw`opacity-0 duration-100 ease-out`}
`;
