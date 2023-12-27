import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw``}
`;

export const Badges = styled.div`
    ${tw`flex gap-[10px]`}
`;

export const Label = styled.div`
    ${tw`mb-[5px] text-base font-bold`}

    span {
        ${tw`text-[#F67071]`}
    }
`;

type BadgeProps = {
    active: boolean;
};

export const Badge = styled.div<BadgeProps>`
    ${tw`inline-flex cursor-pointer items-center overflow-hidden rounded-md bg-gray-50 px-4 py-1 text-lg font-medium text-gray-600 ring-1 ring-inset ring-gray-500/50 duration-75 hover:opacity-70`}

    input {
        ${tw`absolute left-[-1000%]`}
    }

    ${({ active }) => active && tw`bg-blue-50 text-blue-700 ring-blue-700/10`}
`;
