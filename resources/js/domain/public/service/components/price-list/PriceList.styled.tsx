import tw, { styled } from 'twin.macro';

export const Wrapper = styled.ul`
    ${tw`flex flex-col space-y-[20px]`}
`;

export const Item = styled.li`
    ${tw`p-[20px 50px] mobile:p-[10px 25px] tablet:p-[15px 38px] flex items-center justify-between rounded-xl border-2 border-dashed border-[#84AFF1] text-[#84AFF1] mobile:rounded`}

    &:last-of-type {
        animation: blinkLoop 1s ease-in infinite;

        ${tw`border-none bg-primary text-white`}
    }

    @keyframes blinkLoop {
        0%,
        100% {
            ${tw`text-white`}
        }
        50% {
            ${tw`text-[#84AFF1]`}
        }
    }
`;

export const Title = styled.strong`
    ${tw`text-[38px] mobile:text-[19px] tablet:text-[28px]`}
`;

export const Text = styled.p`
    ${tw`text-[28px] mobile:text-[14px] tablet:text-[21px]`}

    strong {
        ${tw`text-[65px] font-bold mobile:text-[32px] tablet:text-[48px]`}
    }
`;
