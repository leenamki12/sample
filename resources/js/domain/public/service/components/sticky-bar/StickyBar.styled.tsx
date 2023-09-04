import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`p-[50px 80px] tablet:p-[38px 60px] mobile:p-[25px 40px] sticky bottom-0 z-10`}
`;

export const Box = styled.div`
    ${tw`flex gap-[30px] mobile:gap-[22px] tablet:gap-[22px]`}

    button {
        ${tw`!h-[100px] !rounded-xl !text-[30px]
            mobile:!h-[50px] mobile:!rounded mobile:!text-[15px]
            tablet:!h-[75px] tablet:!rounded-lg tablet:!text-[22px]
        `}
    }
`;
