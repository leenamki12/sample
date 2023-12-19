import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.footer`
    ${tw`relative w-full font-[pretendard] text-white`}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto w-full max-w-[1240px] px-[20px] py-[100px]`}

    ${screen('tablet')({ ...tw`p-[100px 20px 50px]` })}
`;

export const LogoButton = styled.a`
    ${tw`mx-auto block max-w-[187px] cursor-pointer`}

    ${screen('tablet')({ ...tw`max-w-[141px]` })}

    img {
        ${tw`mx-auto`}
    }
`;

export const Copyright = styled.p`
    ${tw`mt-[30px] text-base`}

    ${screen('tablet')({ ...tw`mt-[15px] text-xs` })}
`;

export const FamilyBox = styled.div`
    ${tw`absolute right-[20px] top-0 w-[150px] border-[#EBEFF5] bg-white text-base text-black`}
`;

export const TopBox = styled.div`
    ${tw`absolute right-0 top-1/2 -translate-y-1/2`}

    span {
        ${tw`mb-[10px] flex h-[60px] w-[60px] items-center justify-center bg-white/80`}
    }

    ${screen('tablet')({ ...tw`hidden` })}
`;
