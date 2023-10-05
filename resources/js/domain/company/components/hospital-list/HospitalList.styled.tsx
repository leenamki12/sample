import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`space-y-[40px]`}
`;

export const Item = styled.div`
    ${tw`cursor-pointer overflow-hidden rounded-2xl shadow-[10px_10px_30px_5px_rgba(0,0,0,0.08)]`}
`;
