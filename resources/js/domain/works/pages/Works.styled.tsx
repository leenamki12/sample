import tw, { styled } from 'twin.macro';

import { Button } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`text-white`}
`;

export const WorksWrpper = styled.div`
    ${tw`px-[50px]`}
`;

export const FilterTopWrapper = styled.div`
    ${tw`flex`}
`;

export const FilterTopButtons = styled.div`
    ${tw`flex flex-1 gap-[10px]`}
`;

export const FilterButton = styled(Button)`
    ${tw`flex h-[44px] max-w-[110px] items-center justify-center gap-[5px] rounded-full border-white bg-transparent font-normal text-white`}

    &:hover {
        ${tw`text-[#181717]`}
        svg {
            ${tw` stroke-[#181717]`}
        }
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
