import tw, { styled, screen } from 'twin.macro';

import icon from '@assets/common/icon-divider.png';

export const Wrapper = styled.div`
    ${tw`relative m-auto box-border h-[57px] w-full max-w-[1600px] px-[50px]`}

    &::after {
        ${tw`absolute left-0 top-0 h-[57px] w-[54px]`}
        content: '';
        background: url(${icon}) no-repeat center center;
    }
    &::before {
        ${tw`absolute right-0 top-0 h-[57px] w-[54px]`}
        content: '';
        background: url(${icon}) no-repeat center center;
    }

    span {
        ${tw`absolute left-[70px] top-[50%] block h-[2px] w-[calc(100%-140px)] -translate-y-[1.5px] bg-black`}
    }

    ${screen('tablet')({ ...tw`px-[70px]` })}

    &::after {
        ${tw`absolute left-0 top-0 h-[57px] w-[54px]`}
        ${screen('tablet')({ ...tw`left-[10px]` })}
    }
    &::before {
        ${tw`absolute right-0 top-0 h-[57px] w-[54px]`}
        ${screen('tablet')({ ...tw`right-[10px]` })}
    }

    span {
        ${screen('tablet')({ ...tw`left-[90px] w-[calc(100%-180px)]` })}
    }
`;
