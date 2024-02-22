import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`border-b-[2px] border-[#000]`}
`;

export const Title = styled.div`
    ${tw`p-[30px 60px 30px 30px] relative cursor-pointer text-[16px] font-bold leading-6 hover:bg-slate-100`}

    span {
        ${tw`absolute right-2 top-[22px] block h-[40px] w-[40px]`}
    }
`;
export const Content = styled.div`
    ${tw`h-0 overflow-hidden text-sm`}

    transition: height 0.35s ease;

    & > div {
        ${tw`p-[40px 30px 70px] break-words border-[2px] border-[#000] `}
    }
`;
