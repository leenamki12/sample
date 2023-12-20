import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`text-white`}
`;

export const Section = styled.div`
    ${tw`p-[100px 0 150px]`}

    ${screen('desktop')({ ...tw`p-[50px 0 100px]` })}

    ${screen('tablet')({ ...tw`p-[50px 0] ` })}
`;

export const Title = styled.strong`
    ${tw`mb-[100px] block text-center font-pretendard text-[40px]`}

    ${screen('desktop')({ ...tw`mb-[70px]` })}

    ${screen('tablet')({ ...tw`mb-[50px] text-[30px]` })}
`;

export const BusinessText = styled.p`
    ${tw`mx-auto mb-[80px] max-w-[1040px] px-[20px] text-center text-[25px] leading-loose`}

    ${screen('tablet')({ ...tw`mb-[60px] text-lg` })}

    br {
        ${screen('desktop')({ ...tw`hidden` })}
    }
`;
