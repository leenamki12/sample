import tw, { styled } from 'twin.macro';

export const ModalContainer = styled.div`
    ${tw`flex h-full flex-col rounded-t-xl bg-white py-6`}
`;

export const ContentsBox = styled.div`
    ${tw`relative mt-6 flex-1 overflow-y-auto px-4`}

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
