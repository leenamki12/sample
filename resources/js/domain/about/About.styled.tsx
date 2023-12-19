import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mt-[150px] min-h-screen text-white`}
`;

export const InnerWrap = styled.div`
    ${tw`mx-auto max-w-[1200px]`}
`;

export const Section = styled.div`
    ${tw`p-[100px 0 150px]`}
`;

export const Title = styled.strong`
    ${tw`mb-[100px] block text-center font-pretendard text-[40px]`}
`;
