import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`font-pretendard text-lg leading-loose`}
`;

export const Title = styled.strong`
    ${tw`mb-[40px] block text-[40px]`}
`;

export const ContactContent = styled.div`
    ${tw``}
`;

export const SnsContent = styled.div`
    ${tw`mt-[30px] flex items-center justify-between`}
`;

export const SnsList = styled.div`
    ${tw`flex`}

    li {
        ${tw`ml-[20px]`}

        a {
            ${tw`flex items-center justify-center text-base`}

            span {
                ${tw`mr-[5px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white`}
            }
        }
    }
`;

export const Map = styled.div`
    ${tw`mt-[40px]`}
`;
