import tw, { styled, screen } from 'twin.macro';

import { Button } from '@/components/ui';

export const Wrapper = styled.div`
    ${tw`text-white`}
`;

export const WorksWrpper = styled.div`
    ${tw`px-[50px]`}

    ${screen('laptop')({ ...tw`px-[20px]` })}
`;

export const FilterTopWrapper = styled.div`
    ${tw`flex gap-[10px]`}

    ${screen('tablet')({ ...tw`block` })}
`;

export const FilterTopButtons = styled.div`
    ${tw`flex  gap-[10px]`}
`;

export const FilterButton = styled(Button)`
    ${tw`p-[10px 20px] flex h-[44px] max-w-[110px] items-center justify-center gap-[5px] rounded-full border-white bg-transparent font-normal text-white`}

    ${screen('tablet')({ ...tw`p-[5px 10px] h-[38px] max-w-[85px] text-base` })}

    &:hover {
        ${tw`text-blackPrimary`}
        svg {
            ${tw` stroke-blackPrimary`}
        }
    }
`;

export const FilterSelectWrapper = styled.div`
    ${tw`flex flex-wrap gap-[10px]`}

    ${screen('tablet')({ ...tw`mt-[20px]` })}

    button {
        ${tw`p-[10px 20px] flex min-w-[60px] items-center space-x-[10px] rounded-full bg-white/60 text-center text-blackPrimary`}

        ${screen('tablet')({ ...tw`p-[7px 15px] min-w-[40px] space-x-[5px] text-base` })}
    }
`;

export const FilterContentWrapper = styled.div`
    ${tw`p-[80px 60px] mt-[20px] space-y-[38px] border-[1px] border-white`}

    ${screen('desktop')({ ...tw`p-[50px 40px]` })}

    ${screen('tablet')({ ...tw`p-[20px 15px] mt-[40px] space-y-[20px]` })}

    & > dl {
        ${tw`relative pl-[150px]`}

        ${screen('tablet')({ ...tw`pl-[0px]` })}
    }
    & > dl dt {
        ${tw`absolute left-0 top-0 h-[44px] text-[24px] font-bold leading-[44px]`}

        ${screen('tablet')({ ...tw`relative mb-[5px] h-auto text-lg` })}
    }
    & > dl dd ul {
        ${tw`flex flex-wrap gap-[20px]`}

        ${screen('tablet')({ ...tw`gap-[10px]` })}
    }
    & > li {
        ${tw`h-[44px] flex-1`}

        ${screen('tablet')({ ...tw`h-auto` })}
    }
`;

type FilterSelectButtonProps = {
    active: boolean;
};

export const FilterSelectButton = styled(Button)<FilterSelectButtonProps>`
    ${tw`h-[44px]  rounded-full border-white bg-transparent px-[20px] font-normal text-white`}

    ${screen('tablet')({ ...tw`h-[38px] px-[15px] text-base` })}

    &:hover {
        ${tw`text-blackPrimary`}

        svg {
            ${tw` stroke-blackPrimary`}
        }
    }

    ${({ active }) => active && tw`bg-green`}
`;

export const PerformanceListWrapper = styled.div`
    ${tw`mt-[80px] overflow-hidden`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const PerformanceList = styled.ul`
    ${tw`grid grid-cols-4 gap-[10px]`}

    ${screen('fullDesktop')({ ...tw`grid-cols-3` })}

    ${screen('laptop')({ ...tw`grid-cols-2` })}
`;

export const PerformanceItem = styled.li`
    ${tw`relative h-full w-full`}

    &::after {
        ${tw`block pb-[100%] content-['']`}
    }
`;

type PerformanceProps = {
    image: string;
};

export const ContentsBox = styled.div<PerformanceProps>`
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

    ${screen('laptop')({ ...tw`hidden` })}
`;

export const TextTitle = styled.div`
    ${tw`relative whitespace-pre-line py-[20px] text-center text-[28px] leading-[42px]`}

    ${screen('fullDesktop')({ ...tw`py-[10px] text-[22px] leading-[34px]` })}

    ${screen('desktop')({ ...tw`text-xl` })}

    strong {
        ${tw`line-clamp-3`}
    }

    &:before,
    &:after {
        ${tw`absolute left-1/2 h-[5px] w-[100px] -translate-x-1/2 bg-white content-['']`}

        ${screen('fullDesktop')({ ...tw`h-[3px] w-[90px]` })}
    }

    &:before {
        ${tw`top-0`}
    }

    &:after {
        ${tw`bottom-0`}
    }
`;

export const TextDate = styled.p`
    ${tw`mt-[20px] line-clamp-2 text-lg font-bold`}

    ${screen('fullDesktop')({ ...tw`mt-[10px] text-base` })}
`;

export const TextPart = styled.div`
    ${tw`absolute bottom-[30px] flex flex-wrap items-center justify-center px-[20px] text-base`}

    div {
        ${tw`line-clamp-1`}
    }

    span {
        &:before {
            ${tw`inline-block px-[5px] content-['·']`}
        }

        &:first-of-type:before {
            ${tw`hidden`}
        }
    }

    p {
        &::before {
            ${tw`inline-block px-[5px] content-['|']`}
        }
    }
`;

export const MoreButton = styled.div`
    ${tw`mt-[120px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[70px]` })}
`;

export const NoData = styled.div`
    ${tw`text-center text-[24px]`}

    ${screen('fullDesktop')({ ...tw`text-lg` })}

    strong {
        &:after {
            ${tw`mr-[5px] inline-block content-[',']`}
        }

        &:last-of-type:after {
            ${tw`hidden`}
        }
    }
`;
