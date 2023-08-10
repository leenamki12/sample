import tw, { styled } from 'twin.macro';

type Props = {
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
            ${({ isError }) => isError && tw`fill-red-500`};
        }
    }
`;

export const Input = styled.input<Props>`
    ${tw`absolute left-[-9999%]`}

    ${({ isError }) => isError && tw`border-2 border-red-500`};
`;

type ThempProps = {
    isFileSelected: boolean;
};

export const Themp = styled.div<ThempProps>`
    ${tw`p-[19px 52px 19px 15px] h-[60px] w-full truncate rounded border border-secondary text-base`}

    ${({ isFileSelected }) => !isFileSelected && tw`text-[#ccc]`};
`;

export const Error = styled.div`
    ${tw`mt-1 text-sm text-red-500`}
`;

export const Icon = styled.div`
    ${tw`absolute right-[15px] top-1/2 mt-[-11px] h-[22px]`}
`;
