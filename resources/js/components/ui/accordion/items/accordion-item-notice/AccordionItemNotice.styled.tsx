import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`border-b-[2px] border-[#000]`}

    ${screen('tablet')({ ...tw`border-b-[1px]` })}
`;

export const Title = styled.div`
    ${tw`p-[30px 60px 30px 30px] relative cursor-pointer text-[16px] font-bold leading-6 hover:bg-slate-100`}

    ${screen('tablet')({ ...tw`p-[15px 40px 15px 15px]` })}

    span {
        ${tw`absolute right-2 top-[22px] block h-[40px] w-[40px]`}

        ${screen('tablet')({ ...tw`top-[11px] h-[30px] w-[30px]` })}
    }
`;
export const Content = styled.div`
    ${tw`h-0 overflow-hidden text-sm`}

    transition: height 0.35s ease;

    & > div {
        ${tw`p-[40px 30px 70px] break-words border-[2px] border-[#000] `}

        ${screen('tablet')({ ...tw`p-[20px 20px 20px] border-[1px]` })}
    }
`;
