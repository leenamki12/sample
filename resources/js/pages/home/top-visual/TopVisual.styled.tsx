import tw, { styled, screen } from 'twin.macro';

import visual from '@assets/home/home_section01.png';
import visualMobile from '@assets/home/home_section01_m.png';

export const Wrapper = styled.div`
    ${tw`flex h-[900px] items-center justify-center`}

    background: url(${visual}) no-repeat center -100px;

    ${screen('tablet')({ ...tw`h-auto pb-[50px]` })}

    @media (max-width: 768px) {
        background: url(${visualMobile}) no-repeat center 0 / 100%;
    }
`;

export const Inner = styled.div`
    ${tw`flex w-full flex-col items-center justify-center pt-[200px]`}

    strong {
        ${tw`mb-[50px] font-apple text-[40px] font-light`}
    }

    p {
        ${tw`mb-[100px] text-center font-apple text-[32px] font-light`}
    }

    ${screen('tablet')({ ...tw`pt-[50%]` })}

    strong {
        ${screen('tablet')({ ...tw`mb-[30px] text-[24px]` })}

        ${screen('mobile')({ ...tw`mb-[20px] text-[18px]` })}
    }

    p {
        ${screen('tablet')({ ...tw`mb-[50px] text-[20px]` })}

        ${screen('mobile')({ ...tw`mb-[30px] text-[16px]` })}
    }
`;
