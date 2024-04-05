import tw, { styled, screen } from 'twin.macro';

import { Accordion, Tabs } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`w-full pb-[100px]`}

    ${screen('tablet')({ ...tw`px-[20px] pb-[50px]` })}
`;

export const Inner = styled.div`
    ${tw`m-auto max-w-[1000px]`}
`;

export const TicketContent = styled.div`
    ${tw`mt-[100px] h-[600px] rounded border border-black bg-[#fafafa]`}

    ${screen('tablet')({ ...tw`mt-[30px] h-[300px]` })}
`;

export const HomeAccordion = styled(Accordion)`
    ${tw`border-t-[3px] border-[#000]`}
`;

export const SelectedCategory = styled.div`
    ${tw`mb-[25px] text-center font-apple text-[20px]`}

    ${screen('tablet')({ ...tw`mb-[20px] text-[18px]` })}
`;

export const InputBox = styled.div`
    ${tw`mb-[90px] flex border-[2px] border-black`}

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

export const FaqTabs = styled(Tabs)`
    ${tw`mb-[60px]`}

    ${screen('tablet')({ ...tw`mb-[30px]` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const Empty = styled.div`
    ${tw`flex h-[100px] items-center justify-center`}
`;
