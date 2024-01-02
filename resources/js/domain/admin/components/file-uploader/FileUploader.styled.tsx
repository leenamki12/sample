import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw``}
`;

export const Title = styled.div`
    ${tw`mb-[15px] flex justify-between text-base font-bold`}

    span {
        ${tw`text-[#F67071]`}
    }
`;

type FilesProps = {
    isEmpty?: boolean;
};
export const Files = styled.div<FilesProps>`
    ${tw`grid grid-cols-3 gap-[10px] sm:grid-cols-5`}

    ${({ isEmpty }) =>
        isEmpty &&
        tw`
        grid-cols-1!
    `}
`;

type FileItemProps = {
    isThumbnail?: boolean;
};

export const FileItem = styled.div<FileItemProps>`
    ${tw``}
`;

export const Preview = styled.div<FileItemProps>`
    ${tw`flex max-h-[300px] w-full max-w-[250px] flex-col items-center justify-center gap-[10px] overflow-hidden rounded border-[2px] border-dashed border-gray-400 bg-gray-100 p-[10px] text-sm`}

    svg {
        ${tw`h-[30px] w-[30px]`}
    }

    ${({ isThumbnail }) =>
        isThumbnail &&
        tw`

        border-blue-500
    `}
`;

export const Info = styled.div`
    ${tw`mt-[10px]`}

    span {
        ${tw`text-[#F67071]`}
    }
`;

export const UploadButton = styled.label`
    ${tw`p-[10px 15px] flex! cursor-pointer items-center gap-[5px] overflow-hidden rounded border-[1px] bg-blue-500 font-normal text-white duration-75 hover:opacity-80`}

    svg {
        ${tw`h-[20px] w-[20px]`}

        path {
            ${tw`stroke-white`}
        }
    }

    input {
        ${tw`absolute left-[-1000%]`}
    }
`;

export const UploadDisabledButton = styled.label`
    ${tw`p-[10px 15px] flex! items-center gap-[5px] overflow-hidden rounded border-[1px] bg-red-500 font-normal text-white duration-75`}

    svg {
        ${tw`h-[20px] w-[20px]`}

        path {
            ${tw`stroke-white`}
        }
    }
`;

type CountProps = {
    active: boolean;
};

export const ImageCount = styled.div<CountProps>`
    ${tw`ml-[5px] text-xs`}

    ${({ active }) => (!active ? tw`text-blue-400` : tw`text-red-400`)}
`;

export const Empty = styled.div`
    ${tw`flex h-[150px] w-full items-center justify-center rounded bg-gray-100 text-gray-600`}
`;

export const FileButtonBox = styled.div`
    ${tw`mt-[10px] flex justify-center gap-[10px]`}

    input {
        ${tw`absolute left-[-1000%]`}
    }

    button {
        ${tw`h-[32px] w-auto max-w-[100px] px-[10px] text-sm`}
    }
`;

export const LabelButton = styled.label`
    ${tw`flex! h-[32px] max-w-[100px] cursor-pointer items-center rounded border-[1px] border-[#333] bg-white px-[10px] text-sm font-bold text-[#111] duration-200`}

    &:hover {
        ${tw`border-[1px] border-[#666] bg-white text-[#666]`}
    }
`;
