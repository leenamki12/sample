import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mx-auto mt-[50px] max-w-[1000px] rounded-full border-2 border-green p-[50px] text-center first-of-type:mt-0`}

    ${screen('desktop')({ ...tw`p-[40px]` })}

    ${screen('tablet')({ ...tw`mt-[30px] p-[20px] first-of-type:mt-0` })}
`;

export const Title = styled.strong`
    ${tw`text-[30px] text-green`}

    ${screen('tablet')({ ...tw`text-xl` })}
`;

export const Text = styled.p`
    ${tw`mt-[20px] text-[25px] leading-normal`}

    ${screen('desktop')({ ...tw`mt-[10px] break-keep` })}

    ${screen('tablet')({ ...tw`mt-[5px] text-base` })}
`;
