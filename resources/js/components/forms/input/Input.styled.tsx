import { Form, Input } from 'antd';
import tw, { styled } from 'twin.macro';

export const Label = styled(Form.Item)`
    ${tw`rounded bg-white`}
`;
export const InputItem = styled(Input)`
    ${tw`rounded bg-white`}

    svg {
        ${tw`h-[20px] w-[20px]`}
    }
`;
