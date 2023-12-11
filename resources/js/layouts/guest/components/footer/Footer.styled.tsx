import tw, { styled } from 'twin.macro';

import FamilySiteArrow from '@assets/common/icon_footer_link_arrow.svg';

export const Wrapper = styled.footer`
    ${tw`relative w-full font-[pretendard] text-white`}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto w-full max-w-[1200px] py-[100px]`}
`;

export const LogoButton = styled.a`
    ${tw`mx-auto block max-w-[187px] cursor-pointer`}

    img {
        ${tw`mx-auto`}
    }
`;

export const Copyright = styled.p`
    ${tw`mt-[30px] text-base`}
`;

export const FamilyBox = styled.div`
    ${tw`absolute right-0 top-0 w-[150px] border-[#EBEFF5] bg-white text-base text-black`}

    button {
        ${tw`relative block h-[32px] w-full px-[12px] text-left leading-[32px]`}

        &:after {
            ${tw`absolute right-[15px] top-1/2 block h-[7px] w-[12px] -translate-y-1/2 bg-no-repeat content-['']`}
            background-image: url(${FamilySiteArrow});
        }
    }
`;

export const SiteList = styled.ul`
    li {
        ${tw`leading-[32px]`}

        a {
            ${tw`block px-[12px]`}
        }
    }
`;

export const TopBox = styled.div`
    ${tw`absolute right-0 top-1/2 -translate-y-1/2`}

    span {
        ${tw`mb-[10px] flex h-[60px] w-[60px] items-center justify-center bg-white/80`}
    }
`;
