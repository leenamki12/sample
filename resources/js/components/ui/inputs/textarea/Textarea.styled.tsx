import tw, { styled } from 'twin.macro';

type Props = {
    hasIcon: boolean;
    isEnter: boolean;
    isError: boolean;
};

export const Wrapper = styled.div<Props>`
    ${tw`relative w-full`}

    & > input {
        width: inherit;
    }

    svg {
        ${tw`absolute left-[15px] top-1/2 mt-[-11px] h-[22px]`}
        path {
            ${({ isEnter }) => isEnter && tw`fill-[#181717]`};

            ${({ isError }) => isError && tw`fill-red-500`};
        }
    }
`;

export const Textarea = styled.textarea<Props>`
    ${tw`p-[19px 15px] w-full resize-none rounded border border-secondary`}

    ${({ isEnter }) => isEnter && tw`border-2 border-[#181717]`};

    ${({ isError }) => isError && tw`border-2 border-red-500`};

    ${({ hasIcon }) => hasIcon && tw`pl-[47px]`}

    ${tw`
        read-only:border-[#dadada]
        read-only:bg-[#f8f8f8]
        read-only:ring-0
    `}
`;

export const Error = styled.div`
    ${tw`mt-1 text-sm text-red-500`}
`;
