import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`font-pretendard text-lg leading-loose`}

    ${screen('tablet')({ ...tw`text-base` })}
`;

export const Title = styled.strong`
    ${tw`mb-[40px] block text-[40px]`}

    ${screen('tablet')({ ...tw`mb-[30px] text-[25px]` })}
`;

export const SnsContent = styled.div`
    ${tw`mt-[30px] flex items-center justify-between`}

    ${screen('tablet')({ ...tw`mt-[15px] flex-col items-start text-xs` })}
`;

export const SnsList = styled.div`
    ${tw`flex`}

    li {
        ${tw`ml-[20px]`}

        ${screen('tablet')({ ...tw`ml-0 mr-[10px]` })}

        a {
            ${tw`flex items-center justify-center text-base`}

            span {
                ${tw`mr-[5px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white`}

                ${screen('tablet')({ ...tw`h-[20px] w-[20px]` })}
            }
        }
    }

    ${screen('tablet')({ ...tw`mt-[40px]` })}
`;

export const Map = styled.div`
    ${tw`mt-[40px]`}

    iframe {
        ${tw`h-[520px] w-full max-w-[1200px]`}

        ${screen('tablet')({ ...tw`h-[300px]` })}

        ${screen('mobile')({ ...tw`h-[200px]` })}
    }

    ${screen('tablet')({ ...tw`mt-[15px]` })}
`;
