import tw, { styled, screen, css } from 'twin.macro';

export type StyleProps = {
    isMobileFull?: boolean;
};

export const Wrapper = styled.div<StyleProps>`
    ${tw`mx-auto max-w-[1240px] px-[20px]`}

    ${StyleProps =>
        StyleProps.isMobileFull &&
        css`
            ${screen('desktop')({ ...tw`px-0` })}
        `}
`;
