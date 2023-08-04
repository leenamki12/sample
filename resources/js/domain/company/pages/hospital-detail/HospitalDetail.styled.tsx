import tw, { styled } from 'twin.macro';

export const Container = styled.div`
    ${tw`bg-[#F8F8F8]`}
`;

export const TextBox = styled.div`
    ${tw`p-[30px 30px 40px]`}
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

export const Section = styled.div`
    ${tw`p-[40px 30px] mt-[10px] overflow-hidden bg-white`}
`;

export const SectionTitle = styled.strong`
    ${tw`block text-[20px] font-bold`}
`;

export const TreatmentList = styled.ul`
    ${tw`mt-[20px] flex flex-wrap gap-[10px]`}

    li {
        ${tw`p-[10px 15px] rounded bg-[#F2F2F2] text-base`}
    }
`;
