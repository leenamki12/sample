import { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';

import { ImageActions } from '@xeger/quill-image-actions';
import { ImageFormats } from '@xeger/quill-image-formats';
import { Form, FormRule } from 'antd';
import axios from 'axios';

import 'react-quill/dist/quill.snow.css';

Quill.register('modules/imageActions', ImageActions);
Quill.register('modules/imageFormats', ImageFormats);

type Props<T> = {
    label?: string;
    name: keyof T;
    rules?: FormRule[];
    onChangeValue: (name: keyof T, value: string) => void;
    onChangeFile: (ids: number[]) => void;
};

function Editor<T = any>({ label, name, rules, onChangeValue, onChangeFile }: Props<T>) {
    const [fileIds, setFileIds] = useState<number[]>([]);
    const quillRef = useRef<ReactQuill>(null);

    const modules = {
        imageActions: {},
        imageFormats: {},
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, 7] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ align: [] as string[] }],
                [{ color: [] as string[] }, { background: [] as string[] }],
                [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                ['link', 'image', 'video'],
            ],

            ImageResize: {
                modules: ['Resize'],
            },
        },
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'align',
        'color',
        'background',
        'float',
        'height',
        'width',
        'video',
    ];

    useEffect(() => {
        const editor = quillRef.current.getEditor();
        const handleImage = () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = async () => {
                const file = input.files[0];
                const range = editor.getSelection(true);
                editor.insertEmbed(
                    range.index,
                    'image',
                    `https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif`
                );
                try {
                    const formData = new FormData();
                    formData.append('image', file);
                    const response = await axios.post(route('admin.notice.upload'), formData);

                    setFileIds(prevIds => [...prevIds, response.data.file_id]);
                    editor.deleteText(range.index, 1);
                    editor.insertEmbed(range.index, 'image', response.data.url);
                    //editor.setSelection(range.index + 1, 1);
                } catch (e) {
                    editor.deleteText(range.index, 1);
                }
            };
        };

        if (quillRef.current) {
            const toolbar = editor.getModule('toolbar');
            toolbar.addHandler('image', handleImage);
        }
    }, []);

    useEffect(() => {
        onChangeFile(fileIds);
    }, [fileIds]);

    return (
        <Form.Item name={name as string} rules={rules} label={label} className="overflow-hidden">
            <ReactQuill
                ref={quillRef}
                theme="snow"
                modules={modules}
                formats={formats}
                style={{
                    height: '300px',
                    marginBottom: '50px',
                    border: 'none',
                }}
                placeholder="공지내용을 입력해주세요."
                onChange={e => onChangeValue(name, e)}
            />
        </Form.Item>
    );
}

export default Editor;
