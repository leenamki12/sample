import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex h-screen w-full flex-col items-center justify-center space-y-5 bg-gray-100`}
`;

export const InnerBox = styled.div`
    ${tw`flex h-3/5 w-3/5 space-x-10 rounded-2xl bg-white p-20 shadow-lg`}

    & > div {
        ${tw`flex flex-1 cursor-pointer rounded-2xl bg-emerald-300 text-2xl font-bold text-white shadow-lg duration-300`}
    }
    & > div:first-of-type {
        ${tw`bg-purple-300`}
    }

    & > div:hover {
        ${tw`bg-emerald-400`}
    }
    & > div:first-of-type:hover {
        ${tw`bg-purple-400`}
    }

    & > div a {
        ${tw`flex h-full w-full items-center justify-center`}
    }
`;
