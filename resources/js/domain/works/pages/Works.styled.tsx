import tw, { styled, screen } from 'twin.macro';

import { Button } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`text-white`}
`;

export const WorksWrpper = styled.div`
    ${tw`px-[50px]`}
`;

export const FilterTopWrapper = styled.div`
    ${tw`flex gap-[10px]`}
`;

export const FilterTopButtons = styled.div`
    ${tw`flex gap-[10px]`}
`;

export const FilterButton = styled(Button)`
    ${tw`p-[10px 20px] flex h-[44px] max-w-[110px] items-center justify-center gap-[5px] rounded-full border-white bg-transparent font-normal text-white`}

    &:hover {
        ${tw`text-[#181717]`}
        svg {
            ${tw` stroke-[#181717]`}
        }
    }
`;

export const FilterSelectWrapper = styled.div`
    ${tw`flex`}

    button {
        ${tw`p-[10px 20px] flex min-w-[60px] items-center space-x-[10px] rounded-full bg-white/60 text-center`}
    }
`;

export const FilterContentWrapper = styled.div`
    ${tw`p-[80px 60px] mt-[20px] space-y-[38px] border-[1px] border-white`}

    & > dl {
        ${tw`relative pl-[150px]`}
    }
    & > dl dt {
        ${tw`absolute left-0 top-0 h-[44px] text-[24px] font-bold leading-[44px]`}
    }
    & > dl dd ul {
        ${tw`flex gap-[20px]`}
    }
    & > li {
        ${tw`h-[44px] flex-1`}
    }
`;

type FilterSelectButtonProps = {
    active: boolean;
};

export const FilterSelectButton = styled(Button)<FilterSelectButtonProps>`
    ${tw`h-[44px]  rounded-full border-white bg-transparent px-[20px] font-normal text-white`}

    &:hover {
        ${tw`text-[#181717]`}

        svg {
            ${tw` stroke-[#181717]`}
        }
    }

    ${({ active }) => active && tw`bg-green`}
`;

export const AlbumListWrapper = styled.div`
    ${tw`mt-[80px] overflow-hidden`}
`;

export const AlbumList = styled.ul`
    ${tw`grid grid-cols-4 gap-[10px]`}
`;

export const AlbumItem = styled.li`
    ${tw`relative h-full w-full`}

    &::after {
        ${tw`block pb-[100%] content-['']`}
    }
`;

type AlbumProps = {
    image: string;
};

export const ContentsBox = styled.div<AlbumProps>`
    ${tw`relative h-full w-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat`}

    background-image: url(${props => props.image});
    background-position: center;

    &:hover {
        background:
            radial-gradient(39% 39% at 50% 50%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.7) 100%),
            url(${props => props.image}),
            lightgray 50%;
        background-position: center;

        ${tw`bg-cover bg-center bg-no-repeat`}
    }
`;

export const TextBox = styled.div`
    ${tw`absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center px-[30px] text-center font-wanderlochSecondary text-white opacity-0 transition-opacity duration-150`}

    &:hover {
        ${tw`opacity-100`}
    }

    strong {
        ${tw`relative block whitespace-pre-line py-[30px] text-center text-[28px] leading-[54px]`}

        &:before, &:after {
            ${tw`absolute left-1/2 h-[5px] w-[100px] -translate-x-1/2 bg-white content-['']`}
        }

        &:before {
            ${tw`top-0`}
        }

        &:after {
            ${tw`bottom-0`}
        }
    }

    p {
        ${tw`mt-[20px] text-lg font-bold`}
    }

    ${screen('tablet')({ ...tw`hidden` })}
`;
