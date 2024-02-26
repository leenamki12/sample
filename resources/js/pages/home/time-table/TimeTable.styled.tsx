import tw, { styled, screen } from 'twin.macro';

import bg from '@assets/home/bg_timetable.png';

export const Wrapper = styled.div`
    ${tw`mx-[50px] mb-[100px] rounded-[20px] bg-black pb-[185px] pt-[180px] shadow-lg`}

    ${screen('tablet')({ ...tw`mx-[0px] mb-[50px] rounded-none px-[0px] py-[50px]` })}

    h2 {
        ${tw`mb-[50px] text-center text-[60px] font-light leading-[80px] text-white`}

        ${screen('tablet')({ ...tw`mb-[50px] text-[40px] leading-[40px]` })}
    }

    background: #000 url(${bg}) no-repeat center bottom / 100%;
`;

export const TicketContent = styled.div`
    ${tw`m-auto h-[700px] w-[700px] rounded-[20px] bg-white`}

    ${screen('tablet')({ ...tw`mx-[20px] h-[400px] w-auto` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    span {
        ${tw`border-white bg-black text-white`}

        ${screen('tablet')({ ...tw`rounded-[10px]` })}
    }

    & > div > div {
        ${tw`bg-white`}
    }

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;
