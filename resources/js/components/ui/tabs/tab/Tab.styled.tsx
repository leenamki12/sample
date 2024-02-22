import tw, { styled } from 'twin.macro';

type WrapperProps = {
    isActive?: boolean;
    textColor?: string;
};

export const Wrapper = styled.button<WrapperProps>`
    ${tw`w-[360px] border-b-[2px] border-[#d4d4d4] pb-[10px] text-[25px] font-medium text-[#999]`}

    ${({ textColor, isActive }) =>
        isActive
            ? textColor === 'white'
                ? tw`border-[#fff] text-[#fff]`
                : tw`border-[#000] text-[#000]`
            : tw``}
`;
