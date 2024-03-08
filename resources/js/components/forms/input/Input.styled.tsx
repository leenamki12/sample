import { Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import tw, { styled } from 'twin.macro';

export const Label = styled(Form.Item)`
    ${tw`rounded bg-white`}
`;

const inputSvgStyle = tw`h-[16px] w-[16px]`;

export const InputItem = styled(Input)`
    ${tw`rounded bg-white`}

    svg {
        ${inputSvgStyle}
    }
`;

export const PasswordItem = styled(Password)`
    ${tw`rounded bg-white`}

    svg {
        ${inputSvgStyle}
    }
`;
