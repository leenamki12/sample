import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`relative h-[82px] w-[380px] cursor-pointer overflow-hidden rounded`}

    span {
        ${tw`absolute bottom-[2px] left-[2px] right-[2px] top-[2px] flex items-center justify-center rounded-[8px] bg-white text-center text-[28px] leading-[1]`}

        em {
            ${tw`pt-[2px] text-[28px] font-normal not-italic leading-[1]`}
        }
    }
    div {
        ${tw`absolute -left-[210px] -top-[362px] h-[1200px] w-[800px] bg-black duration-500`}
        animation: rotate 10s ease-in-out infinite;
    }

    &:hover div {
        background: conic-gradient(
            #20fffc 14%,
            #fe1c1e 28%,
            #000000 42%,
            #20fffc 56%,
            #fe1c1e 70%,
            #000000 84%,
            #20fffc 100%
        );
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

    ${screen('tablet')({ ...tw`mx-[20px] h-[55px] w-[calc(100%-40px)]` })}
    ${screen('mobile')({ ...tw`mx-[40px] h-[50px] w-[calc(100%-80px)]` })}

    span {
        ${screen('tablet')({
            ...tw`bottom-[1px] left-[1px] right-[1px] top-[1px]`,
        })}

        em {
            ${screen('tablet')({ ...tw`text-[20px]` })}
            ${screen('mobile')({ ...tw`text-[16px]` })}
        }
    }
`;
