import tw, { styled, screen } from 'twin.macro';

import bg from '@assets/home/bg_ticket.png';
import bgMobile from '@assets/home/bg_ticket_m.png';

export const Wrapper = styled.div`
    ${tw`m-auto w-full py-[160px]`}

    background: url(${bg}) no-repeat center -100px;

    ${screen('tablet')({ ...tw`py-[50px]` })}

    h2 {
        ${tw`mb-[50px] text-center text-[60px] font-light leading-[80px]`}

        ${screen('tablet')({ ...tw`mb-[50px] text-[40px] leading-[40px]` })}
    }

    @media (max-width: 768px) {
        background: url(${bgMobile}) no-repeat center center / 100%;
    }
`;

export const TicketTable = styled.table`
    ${tw`m-auto max-w-[1000px]`}

    thead tr th {
        ${tw`h-[100px] bg-white text-[20px] font-bold`}
    }

    tbody tr td,
    tbody tr th {
        ${tw`h-[100px] border-b-[2px] border-black bg-[#f9f9f9] text-[20px] font-bold`}
    }
    tfoot tr td {
        ${tw`pt-[40px] text-[16px]`}
    }

    td {
        ${tw`text-center`}
    }

    ${screen('tablet')({ ...tw`hidden` })}
`;

export const TicketTableMoble = styled.dl`
    ${tw`mt-[50px] hidden px-[20px]`}

    &:first-of-type {
        ${tw`mt-[0px]`}
    }

    dt {
        ${tw`text-center text-[18px] font-bold leading-[50px]`}
    }

    dd {
        ${tw`flex justify-between border-b-[1px] border-black bg-[#f9f9f9] px-[20px] leading-[50px]`}
    }

    ${screen('tablet')({ ...tw`block` })}
`;

export const TicketInfoMoble = styled.p`
    ${tw`mt-[30px] hidden text-center text-[14px] font-medium leading-5`}

    ${screen('tablet')({ ...tw`block` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;
