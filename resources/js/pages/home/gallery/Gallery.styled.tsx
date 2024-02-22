import tw, { styled } from 'twin.macro';

import bg from '@assets/home/bg_gallery.png';

export const Wrapper = styled.div`
    ${tw`mt-[100px] overflow-hidden bg-black pb-[0px] pt-[180px] shadow-lg`}

    h2 {
        ${tw`mb-[120px] text-center text-[60px] font-light leading-[80px] text-white`}
    }

    background: #000 url(${bg}) no-repeat center top / 100%;
`;

export const ButtonBox = styled.div`
    ${tw`mt-[150px] flex justify-center`}

    span {
        ${tw`border-white bg-black text-white`}
    }

    & > div > div {
        ${tw`bg-white`}
    }
`;
