import tw, { styled, screen } from 'twin.macro';

export const TitleContainer = styled.div`
    ${tw`mb-[100px] mt-[150px] text-center`}

    ${screen('desktop')({ ...tw`mb-[80px] mt-[100px]` })}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const Title = styled.h2`
    ${tw`text-[45px] font-bold text-green`}

    ${screen('tablet')({ ...tw`text-[35px]` })}
`;
