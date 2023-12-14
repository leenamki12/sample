import tw, { styled } from 'twin.macro';

import BusinessBox from '@assets/home/image_business_box.svg';

export const Title = styled.strong`
    ${tw`mb-[80px] block text-center font-pretendard text-[50px]`}
`;

export const BusinessContent = styled.div`
    ${tw`relative whitespace-pre-line break-keep border-2 border-white bg-cover bg-no-repeat p-[70px] text-center text-[25px] leading-[50px]`}
    /* background-image: url(${BusinessBox});
    background-size: auto 100%; */
    /*  clip-path: polygon(7% 0, 100% 0, 100% 0, 100% 86%, 93% 100%, 0 100%, 0 100%, 0 14%); */

    &:before {
        ${tw`absolute -left-[2px] -top-[2px] block bg-blackPrimary bg-no-repeat content-['']`}
        background-image: url(${BusinessBox});
        background-position: 0 0;
        background-size: auto;
        width: 80px;
        height: 45px;
    }

    &:after {
        ${tw`absolute -bottom-[2px] -right-[2px] block bg-blackPrimary bg-no-repeat content-['']`}
        background-image: url(${BusinessBox});
        background-position: 100% 100%;
        background-size: auto;
        width: 80px;
        height: 45px;
    }
`;
