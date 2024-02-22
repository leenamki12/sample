import tw, { styled } from 'twin.macro';

import { Accordion } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`m-auto w-full max-w-[1080px] py-[160px]`}

    h2 {
        ${tw`mb-[50px] text-center text-[60px] font-light leading-[80px]`}
    }
`;

export const HomeAccordion = styled(Accordion)`
    ${tw`border-t-[3px] border-[#000]`}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}
`;
