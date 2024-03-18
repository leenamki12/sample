export type FaqData = {
    id: number;
    title: string;
    is_published: boolean;
    is_main_published: boolean;
    category: string;
    content: string;
    created_at: string;
    faq: {
        id: number;
        category: string;
        content: string;
        created_at: string;
        updated_at: string;
    };
};

export type FaqFormData = {
    title: string;
    category: string;
    content: string;
    is_published: boolean;
    is_main_published: boolean;
};
