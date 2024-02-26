import Marquee from 'react-fast-marquee';

import tw, { styled, screen } from 'twin.macro';

import bg from '@assets/home/bg_gallery.png';

export const Wrapper = styled.div`
    ${tw`mt-[100px] overflow-hidden bg-black pb-[0px] pt-[180px] shadow-lg`}

    ${screen('tablet')({ ...tw`mx-[0px] rounded-none px-[0px] pt-[100px]` })}

    h2 {
        ${tw`mb-[120px] text-center text-[60px] font-light leading-[80px] text-white`}

        ${screen('tablet')({ ...tw`mb-[50px] text-[40px] leading-[40px]` })}
    }

    background: #000 url(${bg}) no-repeat center top / 100%;
`;

export const SliderBox = styled.div`
    ${tw`-mx-[50px]`}

    ${screen('tablet')({ ...tw`mx-[0px]` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[150px] flex justify-center`}

    span {
        ${tw`border-white bg-black text-white`}

        ${screen('tablet')({ ...tw`rounded-[10px]` })}
    }

    & > div > div {
        ${tw`bg-white`}
    }

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const GalleryMarquee = styled(Marquee)`
    ${tw`mt-[170px] w-full`}

    ${screen('tablet')({ ...tw`mt-[80px]` })}

    img {
        ${screen('tablet')({ ...tw`h-[80px]` })}
    }
`;
