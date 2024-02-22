import tw, { styled } from 'twin.macro';

import bg from '@assets/home/bg_timetable.png';

export const Wrapper = styled.div`
    ${tw`mx-[50px] mb-[100px] rounded-[20px] bg-black pb-[185px] pt-[180px] shadow-lg`}

    h2 {
        ${tw`mb-[50px] text-center text-[60px] font-light leading-[80px] text-white`}
    }

    background: #000 url(${bg}) no-repeat center bottom / 100%;
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    span {
        ${tw`border-white bg-black text-white`}
    }

    & > div > div {
        ${tw`bg-white`}
    }
`;
