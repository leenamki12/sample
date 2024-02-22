import tw, { styled } from 'twin.macro';

import bg from '@assets/home/bg_ticket.png';

export const Wrapper = styled.div`
    ${tw`m-auto w-full py-[160px]`}

    h2 {
        ${tw`mb-[50px] text-center text-[60px] font-light leading-[80px]`}
    }

    background: url(${bg}) no-repeat center -100px;
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
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}
`;
