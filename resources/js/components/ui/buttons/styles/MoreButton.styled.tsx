import tw, { styled } from 'twin.macro';

import { Button } from './BaseButton.styled';

export const MoreButton = styled(Button)`
    ${tw`flex h-[44px] w-auto items-center gap-[10px] rounded-full border-2 border-white bg-transparent px-[20px] font-bold text-white`}

    img {
        ${tw`w-[21px]`}
    }
`;
