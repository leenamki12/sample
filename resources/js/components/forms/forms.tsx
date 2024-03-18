import { Form } from 'antd';

import { FormCheckbox, FormSwitch } from './checkbox/Checkbos';
import Editor from './editor/Editor';
import { FormInput, FormPassword } from './input/Input';

const Forms = Object.assign(Form, {
    Input: FormInput,
    Password: FormPassword,
    Checkbox: FormCheckbox,
    Editor: Editor,
    Switch: FormSwitch,
});

export default Forms;
