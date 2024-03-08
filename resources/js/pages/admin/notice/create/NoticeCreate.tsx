import ReactQuill from 'react-quill'; // Quill Editor import

import { Form, Input, Switch, Button } from 'antd';

import 'react-quill/dist/quill.snow.css'; // Quill Editor 스타일 import
import { router } from '@inertiajs/react';
import axios from 'axios';

import { useEffect, useRef, useState } from 'react';

interface NoticeFormData {
    title: string;
    content: string;
    isPublished: boolean;
    isMainPublished: boolean;
    file_ids: number[];
}

function NoticeCreate() {
    const [fileIds, setFileIds] = useState<number[]>([]);

    const quillRef = useRef(null);
    const toolbarOptions = [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['link', 'image', 'video'],
        [{ list: 'ordered' }, { list: 'bullet' }],
    ];

    const modules = {
        toolbar: {
            container: toolbarOptions,
        },
    };

    const onFinish = async (values: NoticeFormData) => {
        try {
            const formData = {
                type: 'NOTICE',
                title: values.title,
                content: values.content,
                is_main_published: values.isMainPublished == true,
                is_published: values.isPublished == true,
                file_ids: fileIds,
            };
            console.log(formData);
            router.post(route('admin.notice.store'), formData);
        } catch (error) {
            console.error('Error saving notice:', error);
        }
    };

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
                    const formData = {
                        image: file,
                    };
                    const response = await axios.post(route('admin.notice.upload'), formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    setFileIds(prevIds => [...prevIds, response.data.file_id]);
                    editor.deleteText(range.index, 1);
                    editor.insertEmbed(range.index, 'image', response.data.url);
                    editor.setSelection(range.index + 1);
                } catch (e) {
                    console.error(e);
                    editor.deleteText(range.index, 1);
                }
            };
        };

        if (quillRef.current) {
            const toolbar = editor.getModule('toolbar');
            toolbar.addHandler('image', handleImage);
        }
    }, []);

    return (
        <div style={{ margin: 'auto', padding: '20px' }}>
            <Form
                name="notice_form"
                onFinish={onFinish}
                labelAlign="left"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Form.Item
                    label="제목"
                    name="title"
                    rules={[{ required: true, message: '제목을 입력해주세요.' }]}
                >
                    <Input placeholder="제목을 입력해주세요." />
                </Form.Item>

                <Form.Item
                    label="공지내용"
                    name="content"
                    rules={[{ required: true, message: '공지내용을 입력해주세요.' }]}
                >
                    <ReactQuill
                        ref={quillRef}
                        theme="snow"
                        modules={modules}
                        style={{
                            height: '400px',
                            marginBottom: '50px',
                        }}
                        placeholder="공지내용을 입력해주세요."
                    />
                </Form.Item>

                <Form.Item label="메인 노출여부" name="isMainPublished" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item label="메뉴 노출여부" name="isPublished" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                        }}
                    >
                        저장
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default NoticeCreate;
