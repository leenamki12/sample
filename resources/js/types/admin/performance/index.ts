import { Part } from '../part';

export type Performance = {
    id: number | string;
    row_number: number;
    title: string; // 공연 제목
    date_and_time: number; //공연시간
    address: string; // 주소
    image_id: number | string; //대표이미지 ID
    hidden: boolean;
    parts: Part[];
    created_at: Date;
    updated_at: Date;
};

export type PerformanceFromkey =
    | 'id'
    | 'title'
    | 'date_and_time'
    | 'address'
    | 'image_id'
    | 'hidden'
    | 'parts';

export type Categories = {
    parts: Part[];
};
