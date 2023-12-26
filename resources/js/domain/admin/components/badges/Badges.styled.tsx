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

export const Badge = styled.label`
    ${tw`inline-flex items-center overflow-hidden rounded-md bg-gray-50 px-4 py-1 text-lg font-medium text-gray-600 ring-1 ring-inset ring-gray-500/50`}

    input {
        ${tw`absolute left-[-1000%]`}
    }
`;
