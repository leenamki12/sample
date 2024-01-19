import { Image } from '@/types/common';

import { PartType } from '../part-types';
import { WorkType } from '../work-types';

export type Performance = {
    id: number | string;
    order_sequence: number;
    title: string; // 공연 제목
    date_time: string; //공연시간
    location: string; // 주소
    visible: boolean;
    main_image_url: string;
    part_types: PartType[];
    work_types: WorkType[];
    images: Image[];
    created_at: Date;
    updated_at: Date;
    main_visible: boolean;
    end_date_time: string; //공연시간
};

export type PerformanceFromkey =
    | 'id'
    | 'title'
    | 'date_time'
    | 'location'
    | 'visible'
    | 'main_visible'
    | 'part_type_ids'
    | 'work_type_ids'
    | 'file_items'
    | 'end_date_time';

export type Categories = {
    part_types: PartType[];
    work_types: WorkType[];
};
