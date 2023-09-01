import tw, { styled } from 'twin.macro';

export const Wrapper = styled.ul`
    ${tw`flex flex-col space-y-[20px]`}
`;

export const Item = styled.li`
    ${tw`p-[20px 50px] flex items-center justify-between rounded-xl border-2 border-dashed border-[#84AFF1] text-[#84AFF1]`}

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
    ${tw`text-[38px]`}
`;

export const Text = styled.p`
    ${tw`text-[28px]`}

    strong {
        ${tw`text-[65px]`}
    }
`;
