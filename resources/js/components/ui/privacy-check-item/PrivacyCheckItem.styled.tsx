import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex h-[20px] items-center justify-between`}

    &:first-of-type {
        ${tw`mt-0`}
    }

    input {
        ${tw`h-[20px] cursor-pointer leading-[20px]`}
    }

    label {
        ${tw`flex cursor-pointer items-center text-base leading-[20px]`}

        span {
            ${tw`font-bold leading-[20px]`}
        }
    }

    button {
        ${tw`border-b border-b-[#888] text-sm leading-[16px] text-[#888]`}

        &:hover {
            ${tw`border-b-[#333]  text-[#333]`}
        }
    }
`;

export const Error = styled.div`
    ${tw`mt-1 text-sm text-red-500`}
`;
