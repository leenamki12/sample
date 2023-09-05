import tw, { styled } from 'twin.macro';

export const Wrapper = styled.ul`
    ${tw`flex flex-col space-y-[50px]`}
`;

export const Item = styled.li`
    ${tw`p-[60px 80px] tablet:p-[45px 60px] mobile:p-[30px 40px] relative flex min-h-[260px] items-center rounded-xl bg-[#EDF4FF] text-[#5A6E80] mobile:min-h-[130px] mobile:rounded tablet:min-h-[195px]`}
`;

export const Title = styled.strong`
    ${tw`mb-[10px] block text-[38px] font-bold mobile:mb-[5px] mobile:text-[19px] tablet:text-[27px]`}
`;

export const Text = styled.p`
    ${tw`break-keep text-[28px] mobile:text-base tablet:text-[21px]`}
`;

export const StepText = styled.div`
    ${tw`p-[12px 23px] mobile:p-[6px 12px] tablet:p-[9px 18px] absolute -top-[30px] left-[40px] rounded
    bg-[#5781E9] text-[25px] font-bold text-white mobile:-top-[15px] mobile:left-[20px] mobile:text-[13px] tablet:-top-[22px] tablet:left-[30px] tablet:text-[18px]
    `}
`;
