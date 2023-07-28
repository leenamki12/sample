import tw, { styled } from 'twin.macro';

export const Container = styled.div`
    ${tw``}
`;

export const Item = styled.div`
    ${tw`mb-10 cursor-pointer overflow-hidden rounded-2xl shadow-[10px_10px_30px_5px_rgba(0,0,0,0.08)]`}

    .swiper-pagination {
        ${tw`absolute bottom-[15px] left-[inherit] right-[15px] w-[inherit] min-w-[50px] rounded-lg bg-[rgba(0,0,0,0.30);] px-[6px] py-[5px] text-[11px] text-white`}
    }
`;
