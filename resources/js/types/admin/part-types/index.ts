export type PartType = {
    id: number | string;
    order_sequence: number;
    performance_count: number;
    name: string;
    created_at: Date;
    updated_at: Date;
};

export type PartTypeFormKey = 'name';
