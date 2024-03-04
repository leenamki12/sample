import tw, { styled, screen, css } from 'twin.macro';

import visual from '@assets/common/bg_page_header.png';

type Props = {
    isBackground: boolean;
};

export const Wrapper = styled.h2<Props>`
    ${tw`h-[240px] text-center text-[50px] font-light leading-[240px]`}

    ${screen('tablet')({ ...tw`h-[140px] text-[30px] leading-[140px]` })}

    ${({ isBackground }) =>
        isBackground &&
        css`
            background: url(${visual}) no-repeat center -100px;
        `}
`;
