import tw, { styled } from 'twin.macro';

export const Container = styled.div`
    ${tw`sticky bottom-0 h-[100px] border-t bg-white`}
`;

export const List = styled.ul`
    ${tw`flex h-full items-center justify-around`}
`;

export const Item = styled.li`
    ${tw`h-full w-full`}

    a {
        ${tw`flex h-full flex-col items-center justify-center gap-2 text-xs`}

        img {
            ${tw`h-9 w-auto`}
        }
    }
`;
