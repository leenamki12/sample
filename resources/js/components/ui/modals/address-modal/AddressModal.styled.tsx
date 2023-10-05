import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw` fixed left-0 right-0 top-0 z-[20] flex h-screen flex-col items-center justify-center`}

    & > .PostModal {
        ${tw`h-screen`}
    }
`;

export const Header = styled.div`
    ${tw`sticky top-0 z-10 flex h-[70px] w-full items-center justify-center border-b border-gray-500 bg-white px-[100px]`}

    h2 {
        ${tw`text-xl font-bold`}
    }

    button {
        ${tw`absolute left-0 top-0 flex h-[70px] w-[90px] items-center justify-center`}

        svg {
            ${tw`w-[30px] text-xl font-bold`}
        }
    }
`;
