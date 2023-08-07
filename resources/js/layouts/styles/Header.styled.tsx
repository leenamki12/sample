import tw, { css, styled } from 'twin.macro';

export type WrapperProps = {
    maxWidth?: string;
};

export const Wrapper = styled.div<WrapperProps>`
    ${tw`sticky top-0 z-10 flex h-[70px] w-full items-center justify-center bg-white px-[100px] drop-shadow-[0_1px_10px_rgba(0,0,0,0.1)]`}

    ${({ maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth};
        `}

    h2 {
        ${tw`text-xl font-bold`}
    }
`;
