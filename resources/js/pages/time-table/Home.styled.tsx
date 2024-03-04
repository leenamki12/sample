import tw, { styled, screen } from 'twin.macro';

import bg from '@assets/pages/time-table/bg_timetable.png';
import bgMobile from '@assets/pages/time-table/bg_timetable_m.png';

export const Wrapper = styled.div`
    ${tw`w-full pb-[100px]`}

    ${screen('tablet')({ ...tw`px-[0px] pb-[50px]` })}

    background:#000 url(${bg}) no-repeat center -100px;

    h2 {
        ${tw`text-white`}
    }
    @media (max-width: 768px) {
        background: #000 url(${bgMobile}) no-repeat center 0 / 100%;
    }
`;

export const Inner = styled.div`
    ${tw`m-auto max-w-[700px]`}
`;

export const TicketContent = styled.div`
    ${tw`m-auto h-[700px] w-[700px] rounded-[20px] bg-white`}

    ${screen('tablet')({ ...tw`mx-[20px] h-[400px] w-auto` })}
`;
