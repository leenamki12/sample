import tw, { css, styled } from 'twin.macro';

import { Button } from './BaseButton.styled';

export type Props = {
    color?: string;
};

export const TextButton = styled(Button)`
    ${tw`h-auto w-auto bg-transparent text-sm font-medium`}

    ${({ color }) =>
        color &&
        css`
            color: ${color};
        `}

    &:hover {
        ${tw`opacity-70`}
    }
`;
