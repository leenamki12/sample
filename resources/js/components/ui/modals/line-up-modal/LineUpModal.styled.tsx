import tw, { styled, screen } from 'twin.macro';

export const SliderContent = styled.div`
    ${tw`absolute bottom-[10px] top-[10px] w-[550px] items-center`}

    ${screen('tablet')({
        ...tw`w-full max-w-[400px]`,
    })}
`;

export const SliderCloseButton = styled.div`
    ${tw`absolute -right-[60px] top-0 h-[50px] w-[50px]`}

    ${screen('tablet')({ ...tw`right-[10px] z-30` })}
`;

export const SliderPrevButton = styled.div`
    ${tw`absolute -left-[100px] top-[50%] h-[60px] w-[60px] translate-y-[-55px] cursor-pointer`}

    ${screen('tablet')({ ...tw`hidden` })}
`;
export const SliderNextButton = styled.div`
    ${tw`absolute -right-[100px] top-[50%] h-[60px] w-[60px] translate-y-[-55px] cursor-pointer`}

    ${screen('tablet')({ ...tw`hidden` })}
`;
