import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`w-full pb-[100px]`}

    ${screen('tablet')({ ...tw`px-[0px] pb-[50px]` })}
`;

export const Inner = styled.div`
    ${tw`m-auto grid max-w-[720px] grid-cols-2 gap-x-[30px] gap-y-[40px]`}

    ${screen('tablet')({ ...tw`gap-x-[15px] gap-y-[15px] px-[20px]` })}
`;

export const ListItem = styled.div`
    ${tw`relative overflow-hidden rounded`}

    p {
        ${tw`absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/75 text-[22px] text-white opacity-0 duration-300`}

        ${screen('tablet')({ ...tw`bottom-0 top-auto h-[50px] bg-black text-[18px] opacity-100` })}
    }

    &:hover > p {
        ${tw`opacity-100`}
    }
`;
