import tw, { styled } from 'twin.macro';

export const Container = styled.div`
    ${tw`border-t border-[#dadada] px-[30px] pb-[50px] pt-[40px]`}
`;

export const LinkList = styled.ul`
    ${tw`mb-[30px] flex items-center gap-[20px]`}
`;

export const Item = styled.li`
    ${tw``}

    a {
        ${tw`text-sm font-bold text-[#aaa]`}
    }
`;

export const FooterLogo = styled.div`
    ${tw`mb-[25px]`}

    a {
        ${tw`inline-block`}

        img {
            ${tw`h-[20px] w-auto`}
        }
    }
`;

export const TextBox = styled.div`
    ${tw`text-[11px] leading-[22px] text-[#aaa]`}
`;

export const Copyright = styled.p`
    ${tw`mt-[20px]`}
`;
