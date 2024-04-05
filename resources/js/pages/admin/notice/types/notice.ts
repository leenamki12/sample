export type NoticeData = {
    id: number;
    title: string;
    content: string;
    is_published: boolean;
    is_main_published: boolean;
    file_ids?: number[];
    created_at: string;
    notice: {
        id: number;
        content: string;
        created_at: string;
        updated_at: string;
    };
};

export type NoticeFormData = {
    title: string;
    content: string;
    is_published: boolean;
    is_main_published: boolean;
    file_ids: number[];
};
