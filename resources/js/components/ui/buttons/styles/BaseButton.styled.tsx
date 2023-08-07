import tw, { css, styled } from 'twin.macro';

export type ButtonProps = {
    hasRounded?: boolean;
    disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
    ${tw`h-[60px] w-full rounded bg-gray-100 font-bold duration-200`}

    ${({ hasRounded }) => hasRounded && tw`rounded-none`}

    &:hover {
        ${tw`opacity-90`}
    }

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: #d5d5d5 !important;
        `}
`;
