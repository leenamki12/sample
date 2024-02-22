import tw, { styled } from 'twin.macro';

type WrapperProps = {
    isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    ${tw`border-b-[2px] border-[#000]`}

    ${({ isOpen }) => isOpen && tw`border-none`}
`;

export const Title = styled.div`
    ${tw`p-[30px 60px 30px 110px] relative cursor-pointer font-apple text-[18px] font-bold leading-6 hover:bg-slate-100`}

    div {
        ${tw`absolute left-3 top-[26px] block h-[30px] w-[55px] rounded-[15px] border border-[#000] text-center text-[16px]  leading-[30px]`}
    }

    span {
        ${tw`absolute right-2 top-[22px] block h-[40px] w-[40px]`}
    }
`;
export const Content = styled.div`
    ${tw`h-0 overflow-hidden bg-[#f1f1f1] text-[18px]`}

    transition: height 0.35s ease;

    & > div {
        ${tw`p-[30px 30px 30px 110px] break-words`}
    }
`;
