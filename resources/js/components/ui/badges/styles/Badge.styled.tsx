import tw, { styled } from 'twin.macro';

export type Props = {
    variant?: 'filled' | 'outlined';
};

export const Badge = styled.div<Props>`
    ${tw`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium`}

    ${({ variant }) =>
        variant === 'filled'
            ? tw`bg-primary text-white`
            : tw`bg-primary/20 text-primary ring-1 ring-inset ring-primary`}

    span {
        ${tw`pl-[4px] text-[11px] leading-[normal] text-white`}

        ${({ variant }) => {
            return variant === 'filled' ? 'text-white' : `text-blue-500`;
        }};
    }
`;
