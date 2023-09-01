import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mt-[30px]`}

    & .swiper-slide {
        ${tw`w-auto max-w-[150px]`}
    }

    .swiper {
        ${tw`overflow-visible`}
    }
`;

export const ImageBox = styled.div`
    ${tw`overflow-hidden rounded`}
`;

export const TextBox = styled.div`
    ${tw`mt-[10px]`}

    strong {
        ${tw`line-clamp-2 min-h-[45px] text-base font-bold text-[#111]`}
    }

    p {
        ${tw`mt-[10px] text-[11px] text-[#666]`}
    }
`;
