import tw, { styled } from 'twin.macro';

export const Container = styled.div`
    ${tw``}
`;

export const Item = styled.div`
    ${tw`mb-10 cursor-pointer overflow-hidden rounded-2xl shadow-[10px_10px_30px_5px_rgba(0,0,0,0.08)]`}

    &:last-of-type {
        ${tw`mb-0`}
    }

    .swiper-pagination {
        ${tw`p-[3px 5px] absolute bottom-[15px] left-[inherit] right-[15px] w-[inherit] min-w-[45px] rounded-lg bg-[rgba(0,0,0,0.30);] text-[11px] text-white`}
    }
`;

export const TitleBox = styled.div`
    ${tw`mb-[9px] flex items-center`}
`;

export const PartnerBox = styled.div`
    ${tw`p-[4px 7px] mr-[7px] flex max-w-[55px] shrink-0 items-center justify-center rounded-xl bg-primary`}

    span {
        ${tw`pl-[4px] text-[11px] leading-[normal] text-white`}
    }
`;

export const Title = styled.strong`
    ${tw`line-clamp-2 text-[19px] font-extrabold`}
`;

export const InfoBox = styled.div`
    ${tw`flex text-sm`}
`;

export const Address = styled.div`
    ${tw`overflow-hidden text-ellipsis whitespace-nowrap break-all`}
`;

export const WorkHour = styled.p`
    ${tw`relative ml-[10px] shrink-0 pl-[10px]`}

    &:before {
        ${tw`absolute left-0 top-1/2 -mt-[4px] h-[8px] w-px bg-secondary content-['']`}
    }
`;
