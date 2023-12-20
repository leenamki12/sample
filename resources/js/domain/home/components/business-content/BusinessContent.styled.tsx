import tw, { styled, screen } from 'twin.macro';

import BusinessBox from '@assets/home/image_business_box.svg';

export const Title = styled.strong`
    ${tw`mb-[80px] block text-center font-pretendard text-[50px]`}

    ${screen('tablet')({ ...tw`mb-[50px] text-[30px]` })}
`;

export const BusinessContent = styled.div`
    ${tw`relative whitespace-pre-line break-keep border-2 border-white bg-cover bg-no-repeat p-[70px] text-center text-[25px] leading-loose`}

    ${screen('tablet')({ ...tw`p-[50px 25px] break-keep text-lg` })}

    &:before, &:after {
        ${tw`absolute block bg-blackPrimary bg-no-repeat content-['']`}
        background-image: url(${BusinessBox});
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
