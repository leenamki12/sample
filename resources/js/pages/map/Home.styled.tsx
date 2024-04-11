import { Map } from 'react-kakao-maps-sdk';

import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`w-full pb-[100px]`}

    ${screen('tablet')({ ...tw`px-[0px] pb-[50px]` })}
`;

export const Inner = styled.div`
    ${tw`m-auto max-w-[1000px]`}

    ${screen('tablet')({ ...tw`px-[20px]` })}
`;

export const Maps = styled(Map)`
    ${tw`h-[600px] w-full`}

    ${screen('tablet')({ ...tw`h-[300px]` })}
`;

export const MapContent = styled.div`
    ${tw`h-[600px] overflow-hidden rounded border border-black bg-[#fafafa]`}

    ${screen('tablet')({ ...tw`mt-[30px] h-[300px]` })}
`;

export const MapInfoList = styled.ul`
    ${tw`mt-[60px] space-y-[20px] px-[8px]`}

    ${screen('tablet')({ ...tw`mt-[30px]` })}

    li {
        ${tw`relative pb-[0px] pl-[106px] pt-[4px]`}

        ${screen('tablet')({ ...tw`pl-[0px]` })}

        strong {
            ${tw`absolute left-0 top-0 block rounded-[15px] border-[1px] border-black px-[15px] pb-[0px] pt-[4px]`}

            ${screen('tablet')({ ...tw`relative mb-[10px] inline-block` })}
        }

        p {
            ${tw`text-[18px] font-semibold `}

            ${screen('tablet')({ ...tw`text-[16px]` })}
        }
    }
`;

export const FaqInfo = styled.p`
    ${tw`mt-[20px] pl-[114px] text-[16px]`}

    ${screen('tablet')({ ...tw`px-[8px] text-[14px]` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}

    svg {
        ${screen('tablet')({ ...tw`h-[22px] w-[22px]` })}
    }

    & p > p {
        ${screen('tablet')({ ...tw`pt-[2px]` })}
    }
`;

export const MapFestivalContent = styled.div`
    ${tw`m-auto h-[800px] max-w-[800px] overflow-hidden rounded border border-black bg-[#fafafa]`}

    ${screen('tablet')({ ...tw`mt-[30px] h-[300px]` })}
`;

export const MapFestivalInfoList = styled.ul`
    ${tw`mt-[60px] space-y-[5px] px-[8px]`}

    ${screen('tablet')({ ...tw`mt-[30px]` })}

    li {
        ${tw`relative text-center`}
        ${screen('tablet')({ ...tw`text-left text-[14px]` })}
    }
`;

export const FestivalInfo = styled.p`
    ${tw`mt-[10px] text-center text-[15px]`}

    ${screen('tablet')({ ...tw`px-[8px] text-left text-[14px]` })}
`;
