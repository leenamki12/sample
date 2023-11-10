import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`p-[40px 20px] rounded bg-white`};
`;

export const Title = styled.h2`
    ${tw`mb-[30px] text-center text-3xl font-bold`}
`;

export const StatsWrapper = styled.div``;

export const GridWrapper = styled.dl`
    ${tw`grid grid-cols-1 gap-5 sm:grid-cols-3`}
`;

export const GridItem = styled.div`
    ${tw`overflow-hidden bg-gray-50 px-4 py-5 shadow sm:p-6`}
`;

export const GridTitle = styled.dt`
    ${tw`truncate text-sm font-medium text-gray-500`}
`;

export const GridContent = styled.dt`
    ${tw`mt-3 flex text-3xl font-semibold tracking-tight text-gray-900`}
`;

type ChangeProps = {
    stats: string;
};

export const GridChange = styled.p<ChangeProps>`
    ${tw`ml-2 flex items-end align-text-bottom text-sm font-semibold`}

    ${({ stats }) => (stats === 'up' ? tw`text-green-600` : tw`text-red-600`)};
`;

export const UpIcon = styled(ArrowUpIcon)`
    ${tw`mb-[2px] h-4 w-4 flex-shrink-0 self-end text-green-500`}
`;
export const DownIcon = styled(ArrowDownIcon)`
    ${tw`mb-[2px] h-4 w-4 flex-shrink-0 self-end text-red-500`}
`;
