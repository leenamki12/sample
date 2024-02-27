import tw, { styled, screen } from 'twin.macro';

import visual from '@assets/pages/about/bg_about.png';
import visualMobile from '@assets/pages/about/bg_about_m.png';

export const Wrapper = styled.div`
    ${tw`h-[886px]`}

    background: url(${visual}) no-repeat center -50px;

    ${screen('tablet')({ ...tw`h-[578px]` })}

    @media (max-width: 768px) {
        background: url(${visualMobile}) no-repeat center 0 / auto 578px;
    }
`;

export const Inner = styled.div`
    ${tw`flex w-full flex-col items-center justify-center pt-[180px]`}

    strong {
        ${tw`mb-[50px] font-apple text-[40px] font-light`}
    }

    p {
        ${tw`mb-[70px] text-center font-apple text-[32px] font-light`}
    }

    ${screen('tablet')({ ...tw`pt-[140px]` })}

    strong {
        ${screen('tablet')({ ...tw`mb-[30px] text-[24px]` })}

        ${screen('mobile')({ ...tw`mb-[20px] text-[18px]` })}
    }

    p {
        ${screen('tablet')({ ...tw`mb-[50px] text-[20px]` })}

        ${screen('mobile')({ ...tw`mb-[30px] text-[16px]` })}
    }
`;
