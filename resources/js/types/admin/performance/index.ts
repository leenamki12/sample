import { Image } from '@/types/common';

import { Part } from '../part';

export type Performance = {
    id: number | string;
    row_number: number;
    title: string; // 공연 제목
    date_time: number; //공연시간
    location: string; // 주소
    visible: boolean;
    main_image_url: string;
    parts: Part[];
    images: Image[];
    created_at: Date;
    updated_at: Date;
};

export type PerformanceFromkey =
    | 'id'
    | 'title'
    | 'date_time'
    | 'location'
    | 'visible'
    | 'parts'
    | 'fileItems';

export type Categories = {
    parts: Part[];
};
