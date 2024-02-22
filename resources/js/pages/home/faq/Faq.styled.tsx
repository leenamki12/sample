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

export const SelectedCategory = styled.div`
    ${tw`mb-[25px] text-center font-apple text-[20px]`}
`;

export const InputBox = styled.div`
    ${tw`mb-[90px] flex border-[2px] border-black`}

    input {
        ${tw`p-[14px 10px 12px] w-full border-none font-apple`}
        &::placeholder {
            ${tw`text-[#333]`}
        }
    }

    button {
        ${tw`flex min-w-[80px] items-center justify-center`}
    }
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}
`;

export const Empty = styled.div`
    ${tw`flex h-[100px] items-center justify-center`}
`;
