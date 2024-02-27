import tw, { styled, screen } from 'twin.macro';

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
