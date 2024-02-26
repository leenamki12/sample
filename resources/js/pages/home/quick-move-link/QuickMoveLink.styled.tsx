import tw, { css, styled, screen } from 'twin.macro';

import slash from '@assets/home/bg_quick_slash.png';
import slashWhite from '@assets/home/bg_quick_slash_white.png';

export const Wrapper = styled.div`
    ${tw`fixed bottom-[100px] right-[60px] z-[8888] flex w-[60px] flex-col items-center gap-y-[15px]`}

    ${screen('tablet')({ ...tw`hidden` })}
`;

type Props = {
    isWhite: boolean;
};

export const CountWrapper = styled.div<Props>`
    ${tw`relative h-[43px] w-[40px] mix-blend-difference`}
    background: url(${slash}) no-repeat center center;

    ${({ isWhite }) =>
        isWhite &&
        css`
            background: url(${slashWhite}) no-repeat center center;
        `}

    span {
        ${tw`absolute text-[26px] leading-[1] text-black`}

        ${({ isWhite }) => isWhite && tw`text-white`}
    }
    .current {
        ${tw`left-0 top-0`}
    }

    .length {
        ${tw`bottom-[-6px] right-0`}
    }
`;

export const ButtonWrapper = styled.div<Props>`
    ${tw`flex flex-col gap-y-[5px]`}

    button {
        ${tw`flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow-lg`}

        ${({ isWhite }) => isWhite && tw`bg-[#F3F6F5]`}

        svg {
            ${tw`w-[28px]`}
        }
    }
`;
