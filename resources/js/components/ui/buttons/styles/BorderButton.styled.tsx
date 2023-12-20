import tw, { css, styled } from 'twin.macro';

import { Button } from './BaseButton.styled';

export type Props = {
    color?: string;
};

export const BorderButton = styled(Button)`
    ${tw`rounded-none border border-white bg-transparent text-lg text-white`}

    ${({ color }) =>
        color &&
        css`
            color: ${color};
            border-color: ${color};
        `}

    &:hover {
        ${tw`opacity-70`}
    }
`;
