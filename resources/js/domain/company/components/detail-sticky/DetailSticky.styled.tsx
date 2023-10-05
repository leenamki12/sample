import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`p-[10px 30px 20px] sticky bottom-[100px] z-10`}
`;

export const Box = styled.div`
    ${tw`flex gap-[15px]`}

    button {
        ${tw`h-[50px] text-lg`}
    }

    button:last-of-type {
        ${tw`!w-1/2`}
    }
`;
