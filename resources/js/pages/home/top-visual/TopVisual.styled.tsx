import tw, { styled } from 'twin.macro';

import visual from '@assets/home/home_section01.png';

export const Wrapper = styled.div`
    ${tw`flex h-[900px] items-center justify-center`}

    background: url(${visual}) no-repeat center -100px;
`;

export const Inner = styled.div`
    ${tw`flex flex-col items-center justify-center pt-[200px]`}

    strong {
        ${tw`mb-[50px] font-apple text-[40px] font-bold`}
    }

    p {
        ${tw`mb-[100px] text-center font-apple text-[32px] font-light`}
    }
`;
