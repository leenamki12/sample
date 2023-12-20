import tw, { styled, screen } from 'twin.macro';

import GlowBox from '@assets/pages/image_present_box.svg';

export const Wrapper = styled.div`
    ${tw`text-white`}
`;

export const Section = styled.div`
    ${tw`p-[100px 0 150px]`}

    ${screen('desktop')({ ...tw`p-[70px 0 120px]` })}

    ${screen('tablet')({ ...tw`p-[50px 0 100px]` })}
`;

export const TitleBox = styled.div`
    ${tw`mb-[70px] text-center`}

    ${screen('tablet')({ ...tw`mb-[55px]` })}
`;

export const TitleIcon = styled.span`
    ${tw`relative mb-[40px] inline-block text-center`}

    ${screen('tablet')({ ...tw`mb-[20px]` })}

    &:before {
        ${tw`mb-[20px] block h-[5px] w-[100px] bg-white shadow-[0px_20px_50px_5px_rgba(255,226,152,0.80)] content-['']`}

        ${screen('tablet')({ ...tw`mb-[15px] h-[3px] w-[50px]` })}
    }

    img {
        ${tw`inline-block`}

        ${screen('tablet')({ ...tw`w-[50px]` })}
    }
`;

export const Title = styled.strong`
    ${tw`block text-center font-pretendard text-[40px]`}

    ${screen('tablet')({ ...tw`text-[30px]` })}
`;

export const GlowContent = styled.div`
    ${tw`relative whitespace-pre-line break-keep border-2 border-green bg-cover bg-no-repeat p-[70px] text-center text-[25px] leading-loose`}

    ${screen('tablet')({ ...tw`p-[50px 25px] break-keep text-lg` })}

    &:before, &:after {
        ${tw`absolute block bg-blackPrimary bg-no-repeat content-['']`}
        background-image: url(${GlowBox});
        background-size: auto;
        width: 80px;
        height: 45px;
    }

    &:before {
        ${tw`-left-[2px] -top-[2px]`}
        background-position: 0 0;
    }

    &:after {
        ${tw`-bottom-[2px] -right-[2px]`}
        background-position: 100% 100%;
    }
`;

export const VenueContent = styled.div`
    ${tw`text-center`}

    strong {
        ${tw`mb-[30px] block text-[24px] font-semibold`}

        ${screen('tablet')({ ...tw`mb-[20px] text-lg` })}
    }

    p {
        ${tw`text-[30px] leading-relaxed`}

        ${screen('tablet')({ ...tw`text-xl` })}
    }
`;

export const ButtonBox = styled.div`
    ${tw`mx-auto mt-[100px] max-w-[500px]`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}

    button {
        ${tw`h-[70px] text-[20px]`}

        ${screen('tablet')({ ...tw`h-[64px] text-lg` })}
    }
`;

export const GreenText = styled.strong`
    ${tw`mt-[40px] block text-center font-pretendard text-[28px] text-green`}

    ${screen('tablet')({ ...tw`text-[20px]` })}
`;
