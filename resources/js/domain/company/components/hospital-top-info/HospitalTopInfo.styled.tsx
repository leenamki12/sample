import tw, { styled } from 'twin.macro';

export const SwiperBox = styled.div`
    .swiper-pagination {
        ${tw`p-[3px 5px] absolute bottom-[15px] left-[inherit] right-[15px] w-[inherit] min-w-[45px] rounded-lg bg-[rgba(0,0,0,0.30);] text-[11px] text-white`}
    }
`;

export const ColBox = styled.div`
    & + & {
        ${tw`p-[40px 30px] overflow-hidden border-t-[10px] border-[#F8F8F8]`}
    }
`;

type TextBoxProps = {
    type: 'list' | 'detail';
};

export const TextBox = styled.div<TextBoxProps>`
    ${({ type }) => (type === 'list' ? tw`p-[22.5px 20px 25px]` : tw`p-[30px 30px 40px]`)};
`;

export const TitleBox = styled.div`
    ${tw`mb-[9px] flex items-start gap-[7px]`}
`;

export const PartnerBox = styled.div`
    ${tw`p-[4px 7px] mt-[1px] flex max-w-[55px] shrink-0 items-center justify-center rounded-xl bg-primary`}

    img {
        ${tw`w-[10px]`}
    }

    span {
        ${tw`pl-[4px] text-[11px] leading-[normal] text-white`}
    }
`;

export const Title = styled.strong`
    ${tw`text-[19px] font-extrabold leading-[24px]`}
`;

export const InfoBox = styled.div`
    ${tw`flex text-sm`}
`;

export const Address = styled.div`
    ${tw`overflow-hidden text-ellipsis whitespace-nowrap break-all`}
`;

export const ContentBox = styled.div`
    ${tw`mb-[9px] text-base text-[#666]`}
`;

type WorkHourProps = {
    isWorking?: boolean;
};

export const WorkHour = styled.p<WorkHourProps>`
    ${tw`relative ml-[10px] shrink-0 pl-[10px]`}

    &:before {
        ${tw`absolute left-0 top-1/2 -mt-[4px] h-[8px] w-px bg-secondary content-['']`}
    }

    strong {
        ${({ isWorking }) => (isWorking ? tw`mr-[6px] text-[#5AC4CB]` : tw`pr-[6px] text-red-500`)};
    }
`;
