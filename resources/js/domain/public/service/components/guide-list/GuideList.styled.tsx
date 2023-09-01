import tw, { styled } from 'twin.macro';

export const Wrapper = styled.ul`
    ${tw`flex flex-col space-y-[50px]`}
`;

export const Item = styled.li`
    ${tw`p-[60px 80px] relative flex min-h-[260px] items-center rounded-xl bg-[#EDF4FF] text-[#5A6E80]`}
`;

export const Title = styled.strong`
    ${tw`mb-[10px] block text-[38px] font-bold`}
`;

export const Text = styled.p`
    ${tw`break-keep text-[28px]`}
`;

export const StepText = styled.div`
    ${tw`p-[12px 23px] absolute -top-[30px] left-[40px] rounded bg-[#5781E9] text-[25px] font-bold text-white`}
`;
