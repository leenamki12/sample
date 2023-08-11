import tw, { styled } from 'twin.macro';

export const ModalContainer = styled.div`
    ${tw`p-[50px 30px 40px] flex h-auto flex-col rounded-t-xl bg-white`}
`;

export const ContentsBox = styled.div`
    ${tw`relative mt-6 flex-1 overflow-y-auto`}

    &::-webkit-scrollbar-thumb {
        ${tw`rounded-sm bg-gray-400 bg-clip-padding opacity-50`}
    }

    &::-webkit-scrollbar {
        ${tw`w-[10px]`}
    }

    &::-webkit-scrollbar-track-piece {
        ${tw` bg-gray-200`}
    }
`;

export const Form = styled.form`
    ${tw`space-y-[20px]`}
`;
