import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`w-full`}

    & > input {
        width: inherit;
    }
`;

type InputProps = {
    isEnter: boolean;
};
export const Input = styled.input<InputProps>`
    ${tw`p-[19px 15px] h-[60px] rounded border border-secondary`}

    ${({ isEnter }) => isEnter && tw`border-2 border-primary`};
`;
