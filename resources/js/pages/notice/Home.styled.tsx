import tw, { styled, screen } from 'twin.macro';

import { Accordion } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`w-full pb-[100px]`}

    ${screen('tablet')({ ...tw`px-[20px] pb-[50px]` })}
`;

export const Inner = styled.div`
    ${tw`m-auto max-w-[1080px]`}
`;

export const HomeAccordion = styled(Accordion)`
    ${tw`border-t-[3px] border-[#000]`}

    ${screen('tablet')({ ...tw`border-t-[2px]` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const InputBox = styled.div`
    ${tw`mb-[90px] hidden border-[2px] border-black`}

    ${screen('tablet')({ ...tw`mx-[20px] mb-[40px] border-[1px]` })}

    input {
        ${tw`p-[14px 10px 12px] w-full border-none font-apple`}
        &::placeholder {
            ${tw`text-[#333]`}
        }
    }

    button {
        ${tw`flex min-w-[80px] items-center justify-center`}

        ${screen('tablet')({ ...tw`min-w-[60px]` })}
    }
`;

export const Empty = styled.div`
    ${tw`flex h-[100px] items-center justify-center`}
`;
