import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/60`}
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

export const Content = styled.div`
    ${tw`max-h-[calc(100%-200px)] max-w-[700px] flex-col overflow-y-auto bg-white p-[30px]`}
`;

export const ButtonBox = styled.div`
    ${tw`w-full pt-[20px] text-center`}

    button {
        ${tw`m-[5px] inline w-full max-w-[200px]`}
    }
`;

export const FileInput = styled.input`
    ${tw`absolute left-[-10000%]`}
`;
