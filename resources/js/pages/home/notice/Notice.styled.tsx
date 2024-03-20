import tw, { styled, screen } from 'twin.macro';

import { Accordion } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`m-auto w-full max-w-[1080px] py-[160px]`}

    ${screen('tablet')({ ...tw`px-[20px] py-[50px]` })}

    h2 {
        ${tw`mb-[50px] text-center text-[60px] font-light leading-[80px]`}

        ${screen('tablet')({ ...tw`mb-[50px] text-[40px] leading-[40px]` })}
    }
`;

export const HomeAccordion = styled(Accordion)`
    ${tw`border-t-[3px] border-[#000]`}

    ${screen('tablet')({ ...tw`border-t-[2px]` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const Empty = styled.div`
    ${tw`flex h-[100px] items-center justify-center`}
`;
