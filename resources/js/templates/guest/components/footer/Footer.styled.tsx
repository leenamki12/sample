import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.footer`
    ${tw`relative w-full bg-[#fafafa] pb-[70px] font-[pretendard]`}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto w-full max-w-[1240px] px-[20px] py-[100px]`}

    ${screen('tablet')({ ...tw`p-[50px 20px 50px]` })}
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

export const TopBox = styled.div`
    ${tw`absolute right-0 top-1/2 -translate-y-1/2`}

    span {
        ${tw`mb-[10px] flex h-[60px] w-[60px] items-center justify-center bg-white/80`}
    }

    ${screen('tablet')({ ...tw`hidden` })}
`;

export const LinkBox = styled.dl`
    ${tw`mt-[30px] flex items-center justify-center gap-[20px]`}

    dt {
        ${screen('mobile')({ ...tw`hidden` })}
    }

    dd > ul {
        ${tw`flex`}
    }

    dd > ul li {
        ${tw`relative ml-[10px] pl-[10px]`}

        &:after {
            content: '';
            ${tw`absolute left-0 top-[50%] -mt-[6px] block h-[12px] w-[2px] bg-black`}
        }

        ${screen('mobile')({ ...tw`ml-[13px] pl-[13px]` })}
    }
    dd > ul li:first-of-type {
        ${tw`relative ml-[0] pl-[0]`}

        &:after {
            ${tw`hidden`}
        }
    }
`;

export const InfoBox = styled.dl`
    ${tw`mt-[10px] flex items-center justify-center gap-[20px]`}

    dd {
    }
`;

export const SnsList = styled.ul`
    ${tw`my-[30px] flex justify-center gap-[10px]`}
`;

export const BuyWrapper = styled.div`
    ${tw`fixed bottom-0 left-0 z-30 box-border w-full overflow-hidden bg-black px-[20px]`}

    ${screen('mobile')({ ...tw`px-[0px]` })}
`;

export const BuyInner = styled.div`
    ${tw`m-auto flex h-[70px] max-w-[1480px] items-center justify-between`}

    ${screen('tablet')({ ...tw`h-auto` })}

    & > div {
        ${screen('tablet')({ ...tw`hidden` })}
    }

    dl {
        ${tw`flex items-center gap-[20px]`}

        ${screen('tablet')({ ...tw`relative z-20 w-full flex-col gap-0` })}

        dt {
            ${tw`mr-[30px] text-[20px] font-medium text-white`}

            ${screen('tablet')({ ...tw`mr-0 w-full bg-black text-center leading-[50px]` })}
        }

        dd {
            ${tw`flex gap-[20px]`}

            ${screen('tablet')({ ...tw`mt-[1px] w-full gap-0` })}
        }

        dd a {
            ${tw`p-[10px 15px] block rounded-[20px] border-[1px] border-white`}

            ${screen('tablet')({
                ...tw`flex flex-1 justify-center rounded-none border-transparent bg-black`,
            })}
        }
        dd a:first-of-type {
            ${screen('tablet')({
                ...tw`mr-[0.5px]`,
            })}
        }
        dd a:last-of-type {
            ${screen('tablet')({
                ...tw`ml-[0.5px]`,
            })}
        }
    }

    .bg {
        ${tw`absolute -left-[210px] -top-[362px] hidden h-[1200px] w-[800px] bg-black duration-500`}
        animation: rotate 10s ease-in-out infinite;
        background: conic-gradient(
            #20fffc 14%,
            #fe1c1e 28%,
            #000000 42%,
            #20fffc 56%,
            #fe1c1e 70%,
            #000000 84%,
            #20fffc 100%
        );
        ${screen('tablet')({ ...tw`block` })}
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
            height: 1200px;
        }
        100% {
            transform: rotate(360deg);
            height: 1200px;
        }
    }
`;
