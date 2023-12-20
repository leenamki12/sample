export type Part = {
    id: number | string;
    row_number: number;
    use_count: number;
    name: string;
    created_at: Date;
    updated_at: Date;
};

export type PartFromkey = 'id' | 'name';
