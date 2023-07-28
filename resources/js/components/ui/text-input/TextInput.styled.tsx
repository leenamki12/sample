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
            ${({ isEnter }) => isEnter && tw`fill-primary`};

            ${({ isError }) => isError && tw`fill-red-500`};
        }
    }
`;

export const Input = styled.input<Props>`
    ${tw`p-[19px 15px] h-[60px] rounded border border-secondary`}

    ${({ isEnter }) => isEnter && tw`border-2 border-primary`};

    ${({ isError }) => isError && tw`border-2 border-red-500`};

    ${({ hasIcon }) => hasIcon && tw`pl-[47px]`}
`;

export const Error = styled.div`
    ${tw`mt-1 text-sm text-red-500`}
`;
