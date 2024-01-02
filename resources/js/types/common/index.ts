export type Paginate<T> = {
    data: T[];
    links: Link[];
    current_page: number;
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    next_page_url: string | null;
    path: string | null;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

type Link = {
    active: boolean;
    label: string;
    url: string | null;
};

export type Image = {
    id: number | undefined;
    file_path: string;
    file_name?: string;
};
