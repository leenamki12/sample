import tw, { styled } from 'twin.macro';

import { Button } from './BaseButton.styled';

export const TertiaryButton = styled(Button)`
    ${tw`border-[1px] border-[#333] bg-white text-xl text-[#111]`}

    &:hover {
        ${tw`border-[1px] border-[#666] bg-white text-[#666]`}
    }
`;
